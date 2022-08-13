import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Colors } from "../constants/default-styles";
import { Ionicons } from '@expo/vector-icons';

const button = props => {
    return (
        <TouchableOpacity
            style = {styles.button__container}
            activeOpacity = {0.9}
            onPress = {() => props.onPress()}
        >
            <View style = {styles.button__}>
                <Text style = {styles.button__text}>
                    {props.children}
                </Text>
                <Ionicons name={props.icon} size={40} color={'white'} />
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    button__container: {
        width: '100%',
        height: 100,
        backgroundColor: Colors.dodgerblue,
    },
    button__ : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    button__text: {
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginLeft: 10,
    }
});