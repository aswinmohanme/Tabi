import React from 'react';
import Expo, {MapView, Permissions, Location} from 'expo';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {Icon, Text, Button, SearchBar} from 'react-native-elements';

import {header as Header} from '../components/header';
import FullButton from '../components/fullButton';

import {colors} from '../styles';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      locPermission: null,
      gpsEnabled: null,
    };

    this.render = this
      .render
      .bind(this);
  }

  async componentWillMount() {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);

    if (status == 'granted') {
      // let { locationServicesEnabled } = await Expo.Location.getProviderStatusAsync();

      // if (locationServicesEnabled){
        let location = await Location.getCurrentPositionAsync({});

        let region = this.regionFrom(location.coords.latitude, location.coords.longitude, 800);
        this.setState({location: region, locPermission: true});
      // }
      // else {
      //   alert("Enable Location if You are going Somewhere")
      // }
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
        <MapView style={styles.map} region={this.state.location}/>
        <Header icon='ios-menu' iconType='ionicon' title={'Book Ride'}/>

        <View style={{
          flex: 1
        }}></View>

        <View style={{
          width: '90%',
          marginBottom: 80
        }}>
          <SearchBar
            lightTheme
            placeholder="Where to Traveller ?"
            containerStyle={{
            borderRadius: 4,
            backgroundColor: colors.bgColor,
            height: 56,
            paddingLeft: 8,
            elevation: 1
          }}
            inputStyle={{
            backgroundColor: colors.bgColor,
            color: colors.txtColor,
            fontFamily: 'karla',
            fontSize: 16
          }}
            icon={{
            name: 'swap-vertical-circle',
            color: colors.txtColor,
            style: {
              fontSize: 18
            }
          }}/>
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
    justifyContent: 'space-around'
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