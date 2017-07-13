import Expo, { MapView } from 'expo';
import React from 'react';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './containers/homeScreen';
import BookTaxiScreen from './containers/bookTaxiScreen';
import DriverSelectScreen from './containers/driverSelect';
import DriverDetailsScreen from './containers/driverDetails';


const App = StackNavigator({
  HomeScreen: {screen: HomeScreen},
  BookTaxiScreen: {screen: BookTaxiScreen},
  DriverSelectScreen: {screen: DriverSelectScreen},
  DriverDetailsScreen: {screen: DriverDetailsScreen},
},{
  navigationOptions: {
    header: null,
  }
});

// import DriverHomeScreen from './containers/driver/driverHome';
// const App = StackNavigator({
//   DriverHomeScreen: {screen: DriverHomeScreen},
// },{
//   navigationOptions: {
//     header: null,
//   }
// });
export default App;