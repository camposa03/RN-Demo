import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text h3 style={{ marginBottom: 50}}>Create your account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name"
                       autoFocus 
                       type="text" />
                <Input placeholder="Email"
                       type="email" />
                <Input placeholder="Password"
                       type="password"
                       secureTextEntry />
            </View>
            <Button containerStyle={styles.button} 
                    title="Register" />
        </KeyboardAvoidingView>
    )
}
export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
