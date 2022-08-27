import React, {useState} from "react";
import { StyleSheet, View, FlatList, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import defaultStyles from "../constants/default-styles";

// Importación de componentes
import MessageContainer from "../components/MessageContainer";
import MessageControl from "../components/MessageControl";


const ChatScreen = (props) => {
  // Datos dummy
  const [mensajes, setMensajes] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      mensaje: "Erick",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      mensaje: "Ricardo",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      mensaje: "Messi",
    },
  ]);

  const renderItem = (itemdata) => {
    return (
      <View style={{ ...defaultStyles.section, alignSelf: "center" }}>
        <MessageContainer mymessage={false}>
          {itemdata.item.mensaje}
        </MessageContainer>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}} enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <FlatList
            style={{ width: "100%", backgroundColor: 'pink' }}
            data={mensajes}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            numColumns={1}
            inverted={true}
            />
            <MessageControl></MessageControl>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});

export default ChatScreen;
