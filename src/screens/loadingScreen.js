import React, {  useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/authContext';

const LoadingScreen = () => {
    const  { isSignedIn } = useContext(AuthContext);
    
    useEffect(() => {
        isSignedIn();
    }, []);

    return null;
};

export default LoadingScreen;