import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import defaultStyles from "../constants/default-styles";

// Importación de componentes
import ContactItem from "../components/ContactItem";

const ContactsScreen = (props) => {
  // Datos dummy
  const [contactos, setContactos] = useState([
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      nombre: "Erick",
      image: "https://placeimg.com/100/100/any",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      nombre: "Ricardo",
      image: "https://placeimg.com/100/100/any",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      nombre: "Messi",
      image: "https://placeimg.com/100/100/any",
    },
  ]);
  const renderItem = (itemdata) => {
    return (
      <View style={{ ...defaultStyles.section, alignSelf: "center" }}>
        <ContactItem source={{ uri: itemdata.item.image }} onPress={() => {props.navigation.navigate({name: 'Chat', params:{contactname: itemdata.item.nombre}})}}>
          {itemdata.item.nombre} 
        </ContactItem>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={contactos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default ContactsScreen;
