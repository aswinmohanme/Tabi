import Expo, { MapView } from 'expo';
import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './containers/homeScreen';
import BookTaxiScreen from './containers/bookTaxiScreen';

const App = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  BookTaxiScreen: {screen: BookTaxiScreen},
},{
  navigationOptions: {
    header: null,
  }
});

export default App;