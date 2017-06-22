import React from 'react';
import Expo, {MapView, Permissions, Location} from 'expo';
import {StyleSheet, View, KeyboardAvoidingView, Dimensions} from 'react-native';
import {Icon, Text, Button} from 'react-native-elements';
import { observable } from 'mobx';
import { inject, observer} from 'mobx-react';

import {header as Header} from '../components/header';
import FullButton from '../components/fullButton';
import PlacesSearch from '../components/placesSearch';

import {colors} from '../styles';

@inject('locationStore')
@observer
class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.render = this
      .render
      .bind(this);
  }

  async componentWillMount() {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);

    if (status == 'granted') {
      // let { locationServicesEnabled } = await
      // Expo.Location.getProviderStatusAsync(); if (locationServicesEnabled){
      let {coords} = await Location.getCurrentPositionAsync({});

      this.props.locationStore.curLocation = {
        lat: coords.latitude,
        lon: coords.longitude,
      }
      // } else {   alert("Enable Location if You are going Somewhere") }
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={this.props.locationStore.destRegion}/>

        <Header icon='ios-menu' iconType='ionicon' title={'Book Ride'}/>

        <View style={{
          width: '90%',
          marginTop: 100
        }}>
          <PlacesSearch onFetch={(data) => {this.props.locationStore.destination = data}}/>
        </View>

        <View style={{flex: 1}}></View>
        <FullButton title="Beam Me Up Scotty" icon="paper-plane" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Expo.Constants.statusBarHeight,
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default HomeScreen;