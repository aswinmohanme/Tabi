
import React, { Component } from 'react';
import Expo from 'expo';
import {View} from 'react-native';
import {observer, inject} from 'mobx-react/native';
import {List, ListItem, Text} from 'react-native-elements';
import {locationStore, driverStore} from '../stores';

@inject('locationStore', 'driverStore')
@observer
class DriverSelectScreen extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }
  componentWillMount() {
    const {locationStore, driverStore} = this.props;
    const {lat, lon} = locationStore.curLocation;
    console.log(lat, lon)
    driverStore.findDrivers([parseFloat(lat), parseFloat(lon)], 5000);
  }

  render() {
    return (
      <View>
        {
          this.props.driverStore.drivers.map((d, i) => (
            <Text>{d.key}</Text>
          ))
        }
      </View>
    );
  }
}

export default DriverSelectScreen;