import {Text, StyleSheet, View,} from "react-native";
import { Colors } from "../constants/default-styles";

function MessageContainer(props) {
  return (
    <Text style = {props.mymessage ? {...styles.MessageContainer, ...styles.MessageContainer_blue} : {...styles.MessageContainer, ...styles.MessageContainer_gray}}>
      {props.children}
    </Text>
  );
}

export default MessageContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    paddingBottom: '20%',
    justifyContent: 'flex-end'
  },
  MessageContainer: {
    width: '80%',
    padding: 10,
    marginBottom: 6,
    color: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    fontSize: 15,
    fontWeight: '500'
  },
  MessageContainer_blue:{
    alignSelf: 'flex-end',
    textAlign: 'right',
    backgroundColor: Colors.dodgerblue,
  },
  MessageContainer_gray:{
    alignSelf: 'flex-start',
    backgroundColor: '#adadad',
  },
})