import {Text, StyleSheet, TextInput, View,} from "react-native";


function InputCorreo (props) {
  return (
    <View style={styles.inputContainer}>
      <Text>Correo</Text>
      <TextInput 
          style = {styles.TextInput} 
          placeholder='Correo'
      />
    </View>
  )
}

export default InputCorreo;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
    marginBottom: 24,
    marginTop: 20,
  },
  TextInput: {
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    width: '100%',
    padding: 10
  },
})