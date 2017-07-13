
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

    driverStore.findDrivers([parseFloat(lat), parseFloat(lon)], 5000);
  }

  render() {
    const {driverDetails}  = this.props.driverStore;
    const {navigate} = this.props.navigation;
    console.log('Hey');
    return (
      <List containerStyle={{marginTop: Expo.Constants.statusBarHeight}}>
        {
          Object.keys(driverDetails).map((key, index) => 
            <ListItem 
              title={driverDetails[key].name || ""}
              onPress={() => navigate('DriverDetailsScreen', {id: key})}
            />
          )
        }
      </List>
    );
  }
}

export default DriverSelectScreen;