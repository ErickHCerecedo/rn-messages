import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        minHeight: '100%',
    },
    screen: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 36,
    },
    section:{
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export const Colors = {
    aliceblue: '#f0f8ff',
    dodgerblue: '#1e90ff',
    lightgreen: '#90ee90',
}