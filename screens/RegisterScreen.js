import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text h3 style={{ marginBottom: 50}}>Create your account</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full Name"
                       autoFocus 
                       type="text" 
                       value={name}
                       onChangeText={text => setName(text)}/>
                <Input placeholder="Email"
                       type="email" 
                       value={email}
                       onChangeText={text => setEmail(text)}/>
                <Input placeholder="Password"
                       type="password"
                       secureTextEntry
                       value={password} 
                       onChangeText={text =>setPassword(text)}/>
            </View>
            <Button containerStyle={styles.button} 
                    raised
                    title="Register"
                    onPress={register} />
        </KeyboardAvoidingView>
    )
}
export default RegisterScreen

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
