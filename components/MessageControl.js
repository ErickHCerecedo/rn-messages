import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity,  } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const MessageControl = props => {
    return(
        <View style={styles.textAreaContainer} >
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Type something cool..."
                placeholderTextColor="grey"
                multiline={true}
                value={props.value}
                onChangeText={props.onChangeText}
            />
            <TouchableOpacity
                style = {styles.button__container}
                activeOpacity = {0.9}
                onPress = {() => props.onPress()}
            >
                <View style = {styles.button__}>
                    <Ionicons name={'send'} size={20} color={'white'} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    textAreaContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
    },
    textArea: {
        width: '85%',
        minHeight: 40,
        height: 'auto',
        maxHeight: 100,
        paddingLeft: 15,
        paddingRight: 15,

        borderRadius: 20,

        backgroundColor: "gainsboro",
    }, 
    button__container: {
        width: 40,
        height: 40,
        borderRadius: 20,

        backgroundColor: 'lightseagreen',
    },
    button__: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default MessageControl; 