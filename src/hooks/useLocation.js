import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startwatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback);
            setSubscriber(sub);
            if(!granted) {
                throw new Error('Location Permission denied');
            }
        } catch (err) {
            setErr(err);
        }
    };

    useEffect(() => {
        if(shouldTrack) {
            startwatching();
        } else {
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack]);

    return [err];
};