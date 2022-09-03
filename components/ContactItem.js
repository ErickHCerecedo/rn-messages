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
        height: 60,
        marginTop: 8,
        borderRadius: 15,
        //Shadow
        shadowColor: '#171717',
        shadowRadius: 10,
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: -4}
        //position: 'absolute',
        //left: 0,
        //bottom: 0,
    },
    item__frame: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        paddingHorizontal: 5,
        //borderBottomColor: 'rgba(158, 150, 150, .5)',
        //borderBottomWidth: 1,
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
        fontWeight: '500',
        marginLeft: 10,
    },
});

export default ContactItem;