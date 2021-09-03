import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://deluxe-productive-oxygen.glitch.me'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        // console.log(token)
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;    
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;