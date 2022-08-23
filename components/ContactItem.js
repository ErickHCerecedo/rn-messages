import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const ContactItem = props => {
    return(
        <TouchableOpacity
            style={styles.item__contenedor} 
            activeOpacity={0.9} 
            onPress={() => props.onPress()}
        >
            <View style={styles.item__frame}>
                <Image style={styles.item__Image} source={props.source}></Image>
                <Text style={styles.item__Text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item__contenedor: {
        width: '100%',
        height: 50,
        //position: 'absolute',
        //left: 0,
        //bottom: 0,
    },
    item__frame: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: 'rgba(158, 150, 150, .5)',
        borderBottomWidth: 1,
        width: '100%',
        height: '100%'
    },
    item__Image: {
        resizeMode: 'contain',
        borderRadius: 20,
        width: 40,
        height: 40,

    },
    item__Text: {
        color: 'black',
        marginLeft: 10,
    },
});

export default ContactItem;