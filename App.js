import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// Importacion de pantallas
import LoginScreen from './screens/LoginScreen';
import ContactosScreen from './screens/ContactsScreen';
import ChatScreen from './screens/ChatScreen';

export default function App() {
  return (
    <ChatScreen></ChatScreen>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '20%',
    paddingHorizontal: 40,
  },
});