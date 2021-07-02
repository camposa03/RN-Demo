import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { auth } from '../firebase';

function HomeScreen({ navigation}) {

    const signout = async () => {
        console.log("signing out...");
        await auth.signOut();
        navigation.replace("Login");
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text>This is the home screen</Text>
            <Button containerStyle={styles.button} 
                    raised
                    title="Sign-Out"
                    onPress={signout}
              />
        </SafeAreaView>
    )
}

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

export default HomeScreen
