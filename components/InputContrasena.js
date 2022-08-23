import {Text, StyleSheet, TextInput, View,} from "react-native";


function InputContrasena (props) {
  return (
    <View style={styles.inputContainer}>
      <Text>Contraseña</Text>
      <TextInput 
          secureTextEntry={true}
          style = {styles.TextInput} 
          placeholder='Contraseña'
      />
    </View>
  )
}

export default InputContrasena;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 24,
    backgroundColor: 'yellow'
  },
  TextInput: {
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    width: '100%',
    padding: 10
  },
})