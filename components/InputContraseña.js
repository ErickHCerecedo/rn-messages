import {Text, StyleSheet, TextInput, View,} from "react-native";


function InputContraseña (props) {
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

export default InputContraseña;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 24,
  },
  TextInput: {
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    width: '100%',
    marginRight: 8,
    padding: 10
  },
})