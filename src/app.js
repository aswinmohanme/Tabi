import Expo, { MapView } from 'expo';
import React from 'react';

import HomeScreen from './containers/homeScreen';
class App extends React.Component {
  render() {
      return (
        <HomeScreen />
      );
  }
}

export default App;