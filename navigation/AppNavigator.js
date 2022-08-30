import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from "react-native";

import ChatScreen from "../screens/ChatScreen";
import ContactsScreen from "../screens/ContactsScreen";
import LoginScreen from "../screens/LoginScreen";

import { Colors } from "../constants/default-styles";

const Stack = createNativeStackNavigator();

const NavigationOptionsLogin = {
  headerShown:false,
}

const NavigationOptionsContacts = {
  title: 'Lista de contactos',
  headerStyle: {backgroundColor: Colors.dodgerblue},
  headerTintColor: 'white'
  }

const NavigationOptionsChat = {
  headerStyle: {backgroundColor: Colors.dodgerblue},
  headerTintColor: 'white',
}

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={NavigationOptionsLogin} ></Stack.Screen>
        <Stack.Screen name="Contacts" component={ContactsScreen} options={NavigationOptionsContacts}></Stack.Screen>
        <Stack.Screen name="Chat" component={ChatScreen} options= {({ route }) => ({ title: route.params.contactname, ...NavigationOptionsChat})}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;