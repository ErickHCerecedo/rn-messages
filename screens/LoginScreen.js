import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

// Importación de caja de texto de correo y contraseña
import InputCorreo from '../components/InputCorreo';
import InputContrasena from '../components/InputContrasena';

// Importación de botón de inicio de sesión
import ButtonStandard from '../components/ButtonStandard';

// Importación de default styles
import defaultStyles from '../constants/default-styles';

const LoginScreen = props => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}} enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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

export default LoginScreen;