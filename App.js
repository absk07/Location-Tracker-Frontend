import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoadingScreen from './src/screens/loadingScreen';
import AccountScreen from './src/screens/accountScreen';
import SignupScreen from './src/screens/signupScreen';
import SigninScreen from './src/screens/signinScreen';
import TrackListScreen from './src/screens/trackListScreen';
import TrackDetailScreen from './src/screens/trackDetailScreen';
import TrackCreateScreen from './src/screens/trackCreateScreen';
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as LocationProvider } from './src/context/locationContext';
import { Provider as TrackProvider } from './src/context/tracksContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigation = createSwitchNavigator({
  LoadingAuthScreen: LoadingScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  })
}); 

const App = createAppContainer(switchNavigation);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={navigator => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}