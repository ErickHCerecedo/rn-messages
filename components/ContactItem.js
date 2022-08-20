import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import { Colors } from '../constants/Default-Styles';

const ContactItem = props => {
    return(
        <TouchableOpacity
            style={styles.item__contenedor} 
            activeOpacity={0.9} 
            onPress={() => props.onPress()}
        >
            <View style={styles.item__frame}>
                <Image style={styles.item__Image}></Image>
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
        backgroundColor: 'pink'
    },
    item__frame: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    item__Image: {
        borderRadius: 20,
        width: 40,
        height: 40,

        backgroundColor: 'orange'
    },
    item__Text: {
        color: 'black',
        marginLeft: 10,
    },
});

export default ContactItem;