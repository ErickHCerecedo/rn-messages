import { initializeApp, getApps, getApp } from "firebase/app";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { getDatabase, ref, serverTimestamp, onChildAdded, push, off } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Firebase{
    
    static app;
    static auth;

    constructor() {
        this.init();
        this.checkAuth();
    }

    init = () => { 
        console.log('Ejecutando funcion init');
        if (getApps().length === 0) {
            this.app = initializeApp({
                apiKey: "AIzaSyB3GqQeJecF-MboPfoSoTR1aWJ16lwhuec",
                authDomain: "rn-messages.firebaseapp.com",
                projectId: "rn-messages",
                storageBucket: "rn-messages.appspot.com",
                messagingSenderId: "130788280868",
                appId: "1:130788280868:web:cb95f138badeae8dd826b1",
                databaseURL: "https://rn-messages-default-rtdb.firebaseio.com"
            });
        }
    };

    checkAuth = () => {
        console.log('Ejecutando función checkAuth');
        this.auth = initializeAuth(this.app, {
            persistence: getReactNativePersistence(AsyncStorage)
        });

        onAuthStateChanged(this.auth, (user) => {
            if (!user) {
                signInAnonymously(this.auth);
            }
        });
    };

    send = messages => { 
        console.log('Función send');
        console.log(messages);
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: serverTimestamp(),
                user: item.user,
            }
            console.log(message);
            push(this.db, message);
        });
    }

    parse = message => {
        console.log('mensajes cargados', message);
        
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);
        
        return {
            _id,
            createdAt,
            text,
            user,
        }
    }

    get = callback => {
        onChildAdded(this.db, snapshot => {
            console.log('snapshot', snapshot);
            callback(this.parse(snapshot));
        });
    }

    off() {
        off(this.db);
    }

    get db() {
        return ref(getDatabase(), "messages");
    }

    get uid() {
        return (this.auth.currentUser || {}).uid;
    }

 
}

export default new Firebase();