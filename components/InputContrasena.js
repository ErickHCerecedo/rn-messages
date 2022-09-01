import {Text, StyleSheet, TextInput, View,} from "react-native";
import { Colors } from "../constants/default-styles";


function InputContrasena (props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
          secureTextEntry={true}
          style = {styles.TextInput} 
          placeholder='Contraseña'
          placeholderTextColor={'white'}
      />
    </View>
  )
}

export default InputContrasena;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  TextInput: {
    //Caja
    height: 50,
    textAlign: 'center',
    marginBottom: 24,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    opacity: 0.9,
    width: '100%',
    //Letra
    padding: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
})