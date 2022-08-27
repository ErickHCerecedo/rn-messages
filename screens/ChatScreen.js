import React, {useState} from "react";
import { StyleSheet, View, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import defaultStyles from "../constants/default-styles";


// Importación de componentes
import MessageContainer from "../components/MessageContainer";
import MessageControl from "../components/MessageControl";

const DATA = (props) => [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    mensaje: "Que cuentas?",
    escritor: false, 
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    mensaje: "Nada",
    escritor: true,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    mensaje: "Qué onda",
    escritor: false
  },
]

const ChatScreen = (props) => {
  // Datos dummy
  const [mensajes, setMensajes] = useState(DATA);

  const [mensaje, setMensaje] = useState('Hola');

  const renderItem = (itemdata) => {
    return (
      <View style={{ ...defaultStyles.section, alignSelf: "center" }}>
        <MessageContainer mymessage={itemdata.item.escritor}>
          {itemdata.item.mensaje}
        </MessageContainer>
      </View>
    );
  };

  const enviar = () => {console.log(mensaje);
    setMensajes (previo => [{mensaje: mensaje, id: Math.random().toString(), escritor: true},...previo]);
  //  setMensajes({mensaje: mensaje, id: Math.random().toString()});
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}} enabled>
      <View style={styles.container}>
        <FlatList
          style={{ width: "100%"}}
          data={mensajes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={1}
          inverted={true}
          />
          <View style={Platform.OS === "ios" ? {marginBottom: 25, ...styles.footer} : {...styles.footer}}>
          <MessageControl value={mensaje} onChangeText={setMensaje} onPress={() => {enviar()}}></MessageControl>
          </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  footer: {
    width: '90%',
    alignSelf: 'center'
  }
});

export default ChatScreen;
