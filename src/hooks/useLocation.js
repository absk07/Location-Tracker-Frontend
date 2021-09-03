import { useState, useEffect } from 'react';
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    // const [subscriber, setSubscriber] = useState(null);


    useEffect(() => {
        let subscriber;
        const startwatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                const subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback);
                // setSubscriber(sub);
                if(!granted) {
                    throw new Error('Location Permission denied');
                }
            } catch (err) {
                setErr(err);
            }
        };

        if(shouldTrack) {
            startwatching();
        } else {
            if(subscriber) {
                subscriber.remove();
                // setSubscriber(null);
                subscriber = null;
            }
        }
        return () => {
            if(subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    return [err];
};