import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, Text, View} from 'react-native';

export type Category = 'Transporte'|'Acomodação'|'Passeio'|'Restaurante';
export type Entry = {id:string;title:string;category:Category;day:number;time:string;location:string;notes:string};
type Data = {entries:Entry[];trip:string;name:string};
const initial:Data={trip:'Lisboa, lá vamos nós.',name:'Viajante',entries:[
 {id:'1',title:'Chegada a Lisboa',category:'Transporte',day:0,time:'08:30',location:'Aeroporto Humberto Delgado · LIS',notes:'O começo de uma nova história.'},
 {id:'2',title:'Deixar as malas no hotel',category:'Acomodação',day:0,time:'10:00',location:'Seu hotel · Centro de Lisboa',notes:'Combine o horário com a recepção.'},
 {id:'3',title:'Um primeiro sabor de Lisboa',category:'Restaurante',day:0,time:'12:30',location:'Restaurante a escolher · Baixa',notes:'Hora de experimentar a culinária portuguesa.'},
 {id:'4',title:'Uma tarde pelas ruas de Alfama',category:'Passeio',day:0,time:'15:00',location:'Alfama · Lisboa',notes:'Caminhe sem pressa e aproveite os miradouros.'},
]};
const KEY='boraviajar-native-v1';
const Context=createContext<{data:Data;update:(fn:(d:Data)=>Data)=>void;error:string}>({data:initial,update:()=>{},error:''});
function valid(value:unknown):value is Data {const d=value as Data;return !!d&&typeof d.trip==='string'&&typeof d.name==='string'&&Array.isArray(d.entries)&&d.entries.every(e=>typeof e.id==='string'&&typeof e.title==='string'&&['Transporte','Acomodação','Passeio','Restaurante'].includes(e.category)&&Number.isInteger(e.day)&&e.day>=0&&e.day<5&&/^([01]\d|2[0-3]):[0-5]\d$/.test(e.time)&&typeof e.location==='string'&&typeof e.notes==='string');}
export function TripProvider({children}:{children:React.ReactNode}) {
 const [data,setData]=useState<Data>(initial),[ready,setReady]=useState(false),[error,setError]=useState('');
 const queue=useRef(Promise.resolve());const writable=useRef(true);
 useEffect(()=>{let alive=true;AsyncStorage.getItem(KEY).then(raw=>{if(!alive)return;if(raw){const parsed:unknown=JSON.parse(raw);if(!valid(parsed))throw Error('Dados inválidos');setData(parsed);}}).catch(()=>{writable.current=false;if(alive)setError('Não foi possível ler os dados. Reinicie o app para tentar novamente. Alterações desta sessão não serão salvas.');}).finally(()=>{if(alive)setReady(true);});return()=>{alive=false;};},[]);
 useEffect(()=>{if(!ready||!writable.current)return;queue.current=queue.current.then(()=>AsyncStorage.setItem(KEY,JSON.stringify(data))).catch(()=>setError('Não foi possível salvar no celular. Mantenha o app aberto e tente novamente.'));},[data,ready]);
 if(!ready)return <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fbfcf8',gap:12}}><ActivityIndicator color="#476c43"/><Text>Preparando sua viagem…</Text></View>;
 return <Context.Provider value={{data,update:setData,error}}>{children}</Context.Provider>;
}
export const useTrip=()=>useContext(Context);
