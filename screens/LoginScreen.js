import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                       onChangeText={ text => setEmail(text)} />
                <Input placeholder="Password" 
                       secureTextEntry 
                       type="password"
                       value={password}
                       onChangeText={text =>setPassword(text)} />
            </View>

            <Button containerStyle={styles.button} 
                    title="Login" />
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
