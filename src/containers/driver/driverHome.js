
import React from 'react';
import Expo, {MapView, Permissions, Location} from 'expo';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Icon, Text, Button} from 'react-native-elements';
import { observable } from 'mobx';
import { inject, observer} from 'mobx-react';

import {header as Header} from '../../components/header';
import FullButton from '../../components/fullButton';
import RideCard from '../../components/rideCard';
import PlacesSearch from '../../components/placesSearch';

import {colors} from '../../styles';

@inject('locationStore')
@observer
class DriverHomeScreen extends React.Component {

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
      let {coords} = await Location.getCurrentPositionAsync({enableHighAccuracy: true});

      this.props.locationStore.curLocation = {
        lat: coords.latitude,
        lon: coords.longitude,
      }

      this.props.locationStore.didLoad = true;
    }
  }

  render() {
    const {locationStore} = this.props;
    const {navigate} = this.props.navigation;
    if (locationStore.didLoad)
      return (
        <View style={styles.container}>
          <MapView style={styles.map} region={locationStore.region}>

            <MapView.Polyline coordinates={locationStore.wayPoints}
              strokeWidth={4}
              lineCap='round'
            />
            </MapView>

          <Header icon='ios-menu' iconType='ionicon' title={'Book Ride'}/>

          <View style={{flex: 1}}></View>
          <FullButton onPressCall={() => navigate('BookTaxiScreen')} title="Beam Me Up Scotty" icon="paper-plane" />
        </View>
      );

    return <Text>Loading</Text>;
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

export default DriverHomeScreen;