import React, {Component} from 'react';
import Expo, {MapView} from 'expo';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

import {observable} from 'mobx';
import {observer, inject} from 'mobx-react/native';
import {locationStore} from '../stores';

import {header as Header} from '../components/header';
import RideCard from '../components/rideCard';
import FullButton from '../components/fullButton';
import {colors} from '../styles';
@inject(['locationStore'])@observer
class BookTaxiScreen extends Component {
  render() {
    const { locationStore } = this.props;
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={locationStore.region}>
            <MapView.Polyline coordinates={locationStore.wayPoints}
              strokeWidth={4}
              lineCap='round'
            />
            <MapView.Marker
              coordinate={{
              latitude: locationStore.curLocation.lat,
              longitude: locationStore.curLocation.lon
            }}
              />
              {
                (locationStore.destination === null)? 
                null:
                <MapView.Marker
                  coordinate={{
                  latitude: locationStore.destination.lat,
                  longitude: locationStore.destination.lon
                }}
                  />
              }
        </MapView>
        <Header onIconPress={() => goBack()} icon="backburger" title="Book Ride" iconType="material-community"/>

        <View style={styles.rideCard}>
          <RideCard destination={locationStore.destination.name} distance={locationStore.distance / 1000} time={parseInt(locationStore.time / 60)}/>
        </View>

        <View style={{flex: 1}}></View>

        <FullButton title="Call Taxi" icon="taxi" iconType="material-community" onPressCall={() => navigate('DriverSelectScreen')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  rideCard: {
    marginTop: 100,
    width:'90%'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.bgColor,
    width: '100%',
    padding: 20
  },
  bottomText: {
    fontFamily: 'karla-bold',
    fontSize: 16,
    color: colors.txtColor
  }
});

export default BookTaxiScreen;