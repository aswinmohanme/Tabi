
import React, { Component } from 'react';
import Expo from 'expo';

import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { observable } from 'mobx';
import {inject, observer} from 'mobx-react';
import {driverStore, locationStore} from '../stores';

@inject('driverStore', 'locationStore')
@observer
class TicketScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Expo.Constants.statusBarHeight,
  }
});

export default TicketScreen;