import '../_mokcLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/map';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/trackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callback);
    // console.log(isFocused)

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h1>Create a track</Text>
            <Map />

            {err ? <Text>Please enable location service !</Text> : null}

            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);










