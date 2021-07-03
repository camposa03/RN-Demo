import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Platform } from 'react-native';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log("Auth listener");
            if (authUser) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, []);

    const login = async () => { 
        if (!isValid()) {
            if (Platform.OS !== 'android' && Platform.OS !== 'ios') {
                //for woking with web apps
                window.alert("Please provide your login credentials");
                return;
            }
            Alert.alert("Sign-In", "Please provide your login credentials");
            return;
        }
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password); 
        } catch (error) {
            console.log(error);
        }
        console.log("user logged in");
    }

    // TODO:  Move to another file in case validation logic gets more complicated
    const isValid = () => {
        if (!email.trim() || !password.trim()) {
            return false;
        }
        return true;
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image source={{
                   uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"}}
                   style={{ width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"
                       autoFocus 
                       type="email" 
                       value={email} 
                       onChangeText={ text => setEmail(text.trim())} />
                <Input placeholder="Password" 
                       secureTextEntry 
                       type="password"
                       value={password}
                       onChangeText={text =>setPassword(text.trim())} />
            </View>
            <Button containerStyle={styles.button} 
                    title="Login" 
                    onPress={login}/>
            <Button containerStyle={styles.button} 
                    type="outline" 
                    title="Register"
                    onPress={() => navigation.navigate("Register")} />
            <View style={{ height: 100}} />    
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
});
