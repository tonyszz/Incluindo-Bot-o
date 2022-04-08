import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho';
import Botao from './src/components/botao';

export default function App() {
  return (
    <View>
<Cabecalho/>
<Botao 
logo="apps"
texto="Aplicativos"
cor="red"
logo2="game-controller-outline"
texto2="Jogos"
cor2="purple"
/>

<Botao
logo="logo-whatsapp"
texto="WhatsApp"
cor="green"
logo2="game-controller-outline"
texto2="Free Fire"
cor2="orange"
/>

<Botao
logo="logo-facebook"
texto="Facebook"
cor="blue"
logo2="game-controller-outline"
texto2="PUBG"
cor2="black"
/>


</View>

  );
}

