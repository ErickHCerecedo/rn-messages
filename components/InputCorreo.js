import {Text, StyleSheet, TextInput, View,} from "react-native";


function InputCorreo (props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
          style = {styles.TextInput} 
          placeholder='Correo'
          placeholderTextColor={'white'}
          value={props.value}
          onChangeText={props.onChangeText}
      />
    </View>
  )
}

export default InputCorreo;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  TextInput: {
    textContentType: 'emailAdress',
    //Caja
    height: 50,
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
    opacity: 1,
    width: '100%',
    //Letra
    padding: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
})