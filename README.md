# expo-pwa

Aplicação multiplataforma criada com [Expo](https://expo.dev/) e React Native, com suporte à execução na web.

## Requisitos
- Node.js LTS
- npm
- Expo Go (opcional, para testar em dispositivo físico)

## Instalação e execução
```bash
npm install
npx expo start
```

Para executar no navegador:
```bash
npx expo start --web
```

## Scripts
- `npm start`: inicia o Expo
- `npm run web`: inicia a versão web
- `npm run android`: abre no Android
- `npm run ios`: abre no iOS (simulador local requer macOS)
- `npm run typecheck`: verifica os tipos TypeScript

## Nota sobre PWA
Esta base habilita a versão web do Expo. Manifesto, service worker e suporte offline podem ser adicionados depois, conforme os requisitos de instalação e cache desejados.
