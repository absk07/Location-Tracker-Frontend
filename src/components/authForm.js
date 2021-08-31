import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from './spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                {errorMessage ? <Text style={styles.errorMsg}>{errorMessage}</Text> : null}
            </Spacer>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email" 
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                secureTextEntry
                label="Password" 
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer>
                <Button
                    style={styles.btn}
                    title={buttonText}
                    onPress={() => onSubmit({ email, password })} 
                />
            </Spacer>      
        </>
    );
};

const styles = StyleSheet.create({
    errorMsg: {
        backgroundColor: 'crimson',
        color: 'white',
        fontSize: 20,
        padding: 10,
        borderRadius: 7
    },
    btn: {
        backgroundColor: 'red',
        borderRadius: 10
    }
});

export default AuthForm;