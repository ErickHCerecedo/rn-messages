import { StyleSheet, View, Image } from 'react-native';

// Importación de caja de texto de correo y contraseña
import InputCorreo from '../components/InputCorreo';
import InputContrasena from '../components/InputContrasena';

// Importación de botón de inicio de sesión
import ButtonStandard from '../components/ButtonStandard';

// Importación de default styles
import defaultStyles from '../constants/default-styles';

export default function login() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/favicon.png')} />
      <View style={defaultStyles.section}>
        <InputCorreo/>
        <InputContrasena/>
        <ButtonStandard onPress={() => {}}>
          INICIAR SESIÓN
        </ButtonStandard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  image: {
    height: 100,
    width: 100,
    alignItems: 'center',
  }
});

