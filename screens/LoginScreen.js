import React, {useState} from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Importación de caja de texto de correo y contraseña
import InputCorreo from '../components/InputCorreo';
import InputContrasena from '../components/InputContrasena';

// Importación de botón de inicio de sesión
import ButtonStandard from '../components/ButtonStandard';

// Importación de default styles
import defaultStyles from '../constants/default-styles';
import { Colors } from '../constants/default-styles';

const LoginScreen = props => {

  const [username,setUsername] = useState('');

  return (
    <LinearGradient style={styles.background} colors={['#74b7f7','#5fabf5', '#3f9ffc', Colors.dodgerblue, '#0554a1']} >
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}} enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
              <Image style={styles.image} source={require('../assets/logo.png')} />
              <View style={defaultStyles.section}>
                <InputCorreo value={username} onChangeText={setUsername}/>
                <InputContrasena/>
                <ButtonStandard onPress={() => {props.navigation.navigate({name: 'Contacts', params:{username: username}})}}>
                  INICIAR SESIÓN
                </ButtonStandard>
              </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  image: {
    height: 160,
    width: 160,
    alignItems: 'center',
  }
});

export default LoginScreen;