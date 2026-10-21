# BoraViajar · Expo Go

Versão React Native com Expo Router, navegação inferior pelas seis seções, inclusão e exclusão de planos, perfil e armazenamento local no celular. Funciona sem depender do login do site privado.

## Abrir no celular

Instale o Expo Go compatível com o SDK 57. No computador, a partir da raiz do repositório:

```powershell
cd mobile
npm ci
npm start
```

Conecte computador e celular à mesma rede Wi-Fi. Escaneie o QR exibido pelo terminal no Expo Go (Android) ou pela câmera do iPhone. O servidor do computador precisa continuar aberto durante o desenvolvimento. Em redes que bloqueiam comunicação entre dispositivos, use `npx expo start --tunnel` (o CLI pode solicitar a instalação do suporte a túnel).

Compatibilidade do Expo Go, especialmente no iOS, depende da versão instalada. Consulte https://expo.dev/go e https://docs.expo.dev/troubleshooting/expo-go-version-mismatch/ se houver aviso de SDK incompatível. Este projeto usa o SDK 57 recomendado pela documentação de criação para Expo Go neste momento.

## Verificações

```powershell
npm run typecheck
npm run lint
npm run check
npx expo export --platform android --platform ios --output-dir .export
```

## Dados

O roteiro de exemplo usa Lisboa de 12 a 16 de novembro de 2026. AsyncStorage salva os dados neste app/dispositivo, sem sincronizar com o site ou outros celulares. A foto de capa usa internet. Os ícones e a navegação são locais.

`../dist/` continua sendo a versão web instalável. Esta pasta contém o projeto para Expo Go; não é um APK de produção.
