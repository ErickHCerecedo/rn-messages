import {Text, StyleSheet, View,} from "react-native";
import { Colors } from "../constants/default-styles";

function MessageContainer(props) {
  return (
    <Text style = {props.mymessage ? {...styles.MessageContainer, ...styles.MessageContainer_green} : {...styles.MessageContainer, ...styles.MessageContainer_blue}}>
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
    justifyContent: 'flex-end',
    backgroundColor: 'red'
  },
  MessageContainer: {
    width: '80%',
    padding: 10,
    marginBottom: 5,
    borderWidth: 2,
  },
  MessageContainer_green:{
    alignSelf: 'flex-end',
    backgroundColor: 'lightgreen',
    borderColor: 'green'
  },
  MessageContainer_blue:{
    alignSelf: 'flex-start',
    backgroundColor: 'lightblue',
    borderColor: Colors.dodgerblue
  },
})