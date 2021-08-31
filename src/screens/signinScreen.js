import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/authContext';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';

const SigninScreen = () => {
    const  { state, signin, clearErrorMessage } = useContext(AuthContext);
    
    // console.log(state);
    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign In"
                errorMessage={state.errorMessage}
                buttonText="Sign In"
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign Up"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;