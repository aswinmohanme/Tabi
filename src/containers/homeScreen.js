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
  @observable curLocation = {};

  constructor(props) {
    super(props);

    this.state = {
      locPermission: null,
      gpsEnabled: null
    };

    this.render = this
      .render
      .bind(this);
  }

  async componentWillMount() {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);

    if (status == 'granted') {
      // let { locationServicesEnabled } = await
      // Expo.Location.getProviderStatusAsync(); if (locationServicesEnabled){
      let location = await Location.getCurrentPositionAsync({});

      let region = this.regionFrom(location.coords.latitude, location.coords.longitude, 800);
      this.props.locationStore.curLocation = region;
      // } else {   alert("Enable Location if You are going Somewhere") }
    }
  }

  regionFrom(lat, lon, distance) {
    distance = distance / 2
    const circumference = 40075
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    const angularDistance = distance / circumference

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    const longitudeDelta = Math.abs(Math.atan2(Math.sin(angularDistance) * Math.cos(lat), Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

    return result = {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <MapView style={styles.map} region={this.props.locationStore.curLocation}/>

        <Header icon='ios-menu' iconType='ionicon' title={'Book Ride'}/>

        <View style={{
          width: '90%',
          marginTop: 100
        }}>
          <PlacesSearch />
        </View>

      </KeyboardAvoidingView>
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