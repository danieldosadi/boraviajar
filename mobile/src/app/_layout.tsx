import React from 'react';
import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import {StatusBar} from 'expo-status-bar';
import {TripProvider} from '../state/Trip';

export default function Layout(){
 return <TripProvider><StatusBar style="dark"/><Tabs screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarActiveTintColor:'#476c43',tabBarInactiveTintColor:'#909b87',tabBarStyle:{backgroundColor:'#fff',borderTopColor:'#e6e9e1',paddingTop:8},sceneStyle:{backgroundColor:'#fbfcf8'}}}>
  <Tabs.Screen name="index" options={{title:'Roteiro',tabBarAccessibilityLabel:'Roteiro',tabBarIcon:({color})=><Ionicons name="map-outline" color={color} size={23}/>}}/>
  <Tabs.Screen name="transporte" options={{title:'Transporte',tabBarAccessibilityLabel:'Transporte',tabBarIcon:({color})=><Ionicons name="airplane-outline" color={color} size={23}/>}}/>
  <Tabs.Screen name="acomodacao" options={{title:'Acomodação',tabBarAccessibilityLabel:'Acomodação',tabBarIcon:({color})=><Ionicons name="bed-outline" color={color} size={23}/>}}/>
  <Tabs.Screen name="passeio" options={{title:'Passeio',tabBarAccessibilityLabel:'Passeio',tabBarIcon:({color})=><Ionicons name="location-outline" color={color} size={23}/>}}/>
  <Tabs.Screen name="restaurante" options={{title:'Restaurante',tabBarAccessibilityLabel:'Restaurante',tabBarIcon:({color})=><Ionicons name="restaurant-outline" color={color} size={23}/>}}/>
  <Tabs.Screen name="perfil" options={{title:'Perfil',tabBarAccessibilityLabel:'Perfil',tabBarIcon:({color})=><Ionicons name="person-outline" color={color} size={23}/>}}/>
 </Tabs></TripProvider>;
}
