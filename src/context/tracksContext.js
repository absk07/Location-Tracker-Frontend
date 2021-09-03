import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch(action.type) {              
        default: 
            return state;
    }
};

const fetchTracks = dispatch => () => {};

const createTracks = dispatch => async(name, locations) => {
    try {
        const d = await trackerApi.post('/tracks', { name, locations });
        console.log(d);
    } catch (e) {
        console.log('error', e);
    }
};


export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTracks },
    []
);