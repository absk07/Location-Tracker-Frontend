import React, {  useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/locationContext';
import Spacer from './spacer';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);
    // console.log(locations);

    if(!currentLocation) {
        return <ActivityIndicator  size="large" style={{ marginTop: 200 }} />;
    }

    return(
        <Spacer>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 25.2367766, 
                    longitude: 86.9728889,
                    // ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Circle 
                    center={currentLocation.coords}
                    radius={50}
                    strokeColor="rgba(158, 158, 255, 1.0)"
                    fillColor="rgba(158, 158, 255, 0.3)"
                />
                <Polyline 
                    lineDashPattern={[1]}
                    strokeColor="#19B5FE"
                    strokeWidth={5}
                    coordinates={locations.map(loc => loc.coords)} 
                />
            </MapView>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;