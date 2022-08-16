import { StyleSheet, View, Image } from 'react-native';

// Importación de caja de texto de correo y contraseña
import InputCorreo from './components/InputCorreo';
import InputContraseña from './components/InputContraseña';

// Importación de botón de inicio de sesión
import ButtonStandard from './components/ButtonStandard';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/favicon.png')} />
      <View>
        <InputCorreo/>
        <InputContraseña/>
        <ButtonStandard/>
      </View>
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