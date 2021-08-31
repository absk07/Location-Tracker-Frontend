import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../components/spacer';
import { Context as AuthContext } from '../context/authContext';

const AccountScreen = () => {
    const  { signout } = useContext(AuthContext);

    return (
        <View>
            <SafeAreaView forceInset={{ top: 'always'}} />
            <Spacer>
                <Text style={{ fontSize: 48 }}>My Account</Text>
            </Spacer>
            <Spacer>
                <Button 
                    title="Sign Out" 
                    onPress={signout}
                />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;