import * as Location from 'expo-location';

const loc = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAcuracy: 5,
            altitude: 5,
            longitude: 86.9728889 + increment * loc,
            latitude: 25.2367766 + increment * loc
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);