import Expo, { MapView } from 'expo';
import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './containers/homeScreen';
import BookTaxiScreen from './containers/bookTaxiScreen';
import DriverSelectScreen from './containers/driverSelect';

const App = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  BookTaxiScreen: {screen: BookTaxiScreen},
  DriverSelectScreen: {screen: DriverSelectScreen},
},{
  navigationOptions: {
    header: null,
  }
});

export default App;