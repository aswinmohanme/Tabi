import Expo, { MapView } from 'expo';
import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './containers/homeScreen';

const App = StackNavigator({
  HomeScreen: {screen: HomeScreen},
},{
  navigationOptions: {
    header: null,
  }
});

export default App;