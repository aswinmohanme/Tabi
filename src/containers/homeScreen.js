import React from 'react';
import Expo, {MapView} from 'expo';
import {StyleSheet, View} from 'react-native';

import {Icon, Text, Button, SearchBar} from 'react-native-elements';

import {header as Header} from '../components/header';
import FullButton from '../components/fullButton';

import {colors} from '../styles';

mapStyle = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b4975a"
      }
    ]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b4975a"
      }
    ]
  }, {
    "featureType": "landscape.natural",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#353535"
      }
    ]
  }, {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2b2b2b"
      }
    ]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }, {
        "color": "#353535"
      }
    ]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }, {
        "color": "#2e2e2e"
      }
    ]
  }, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#272727"
      }
    ]
  }, {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#656565"
      }
    ]
  }, {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "transit.station",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2e2e2e"
      }
    ]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2e2e2e"
      }
    ]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "simplified"
      }, {
        "color": "#000000"
      }
    ]
  }, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#656565"
      }
    ]
  }, {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "transit.station",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#656565"
      }
    ]
  }, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }, {
        "color": "#272727"
      }
    ]
  }, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "transit.station",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "transit.station",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "off"
      }, {
        "color": "#656565"
      }
    ]
  }, {
    "featureType": "landscape.natural",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#656565"
      }
    ]
  }, {
    "featureType": "landscape.natural",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}/>
      <Header icon='menu' iconType='entypo' title={'Book Ride'}/>

      <View
        style={{
        flex: 1,
        marginTop: 80,
        width: '90%'
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
          color: colors.btnPrimColor,
          style: {
            fontSize: 18
          }
        }}
          clearIcon={{
          name: 'clear-all',
          style: {
            fontSize: 18,
            color: colors.txtColor
          }
        }}/>
      </View>

      <FullButton icon='location-arrow' title='Pick Me Up Scotty'/>
    </View>
  );
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