import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch(action.type) {
        case 'fetch_tracks':
            return action.payload;              
        default: 
            return state;
    }
};

const fetchTracks = dispatch => async() => {
    try {
        const response = await trackerApi.get('/tracks');
        // console.log(response);
        dispatch({ type: 'fetch_tracks', payload: response.data });
    } catch (e) {
        console.log(e);
    }
};

const createTracks = dispatch => async(name, locations) => {
    try {
        const d = await trackerApi.post('/tracks', { name, locations });
        // console.log(d.data);
    } catch (e) {
        console.log(e);
    }
};


export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTracks },
    []
);