import { StyleSheet, View, Image } from 'react-native';

// Importación de caja de texto de correo y contraseña
import InputCorreo from './components/InputCorreo';
import InputContraseña from './components/InputContraseña';

// Importación de botón de inicio de sesión
import ButtonStandard from './components/ButtonStandard';

import ContactItem from './components/ContactItem';
import MessageControl from './components/MessageControl';

import DefaultStyles from './constants/default-styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '20%',
    paddingHorizontal: 40,
  },
  image: {
    height: 100,
    width: 100,
    margin: 100,
    alignItems: 'center',
    marginBottom: 50
  },
});