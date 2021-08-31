import React, {  useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';

const SignupScreen = () => {
    const  { state, signup, clearErrorMessage } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign Up"
                errorMessage={state.errorMessage}
                buttonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign In"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;