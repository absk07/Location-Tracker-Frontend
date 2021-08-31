import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authreducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };  
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clr_err_msg':
            return { ...state, errorMessage: ''};   
        case 'signout':       
            return { token: null, errorMessage: ''};   
        default:
            return state;
    }
};

const isSignedIn = dispatch => async () => {
    //make api request to sign up
    try {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            dispatch({ type: 'signin', payload: token });
            navigate('TrackList');
        } else {
            navigate('Signup');
        }
    } catch (err) {
        console.log(err);
        // dispatch({ type: 'add_error', payload: 'Oops, Something went wrong !' });
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clr_err_msg' });
};

const signup = dispatch => async ({ email, password }) => {
    //make api request to sign up
    try {
        const res = await trackerApi.post('/signup', { email, password });
        // console.log(res.data);
        await AsyncStorage.setItem('token', res.data.token);
        dispatch({ type: 'signup', payload: res.data.token });
        navigate('TrackList');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'add_error', payload: 'Oops, Something went wrong !' });
    }
};

const signin = dispatch => async ({ email, password }) => {
    //make api request to sign in
    try {
        const res = await trackerApi.post('/signin', { email, password });
        // console.log(res.data);
        await AsyncStorage.setItem('token', res.data.token);
        dispatch({ type: 'signin', payload: res.data.token });
        navigate('TrackList');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'add_error', payload: 'Oops, Something went wrong !' });
    }
};

const signout = dispatch => async () => {
    //make api request to sign out
    try {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('loginFlow');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'add_error', payload: 'Oops, Something went wrong !' });
    }
};

export const { Provider, Context } = createDataContext(
    authreducer,
    { signup, signin, signout, clearErrorMessage, isSignedIn },
    { token: null, errorMessage: '' }
);