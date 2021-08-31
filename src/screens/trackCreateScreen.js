import '../_mokcLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/map';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);
    // console.log(isFocused)

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h1>Create a track</Text>
            <Map />

            {err ? <Text>Please enable location service !</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);