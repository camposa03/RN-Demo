import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Text } from 'react-native-elements;
import { StyleSheet, View } from 'react-native'

const RegisterScreen = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text h3 style={{ marginBottom: 50}}>Create your account</Text>
        </KeyboardAvoidingView>
    )
}
export default RegisterScreen

const styles = StyleSheet.create({
    container: {},

});
