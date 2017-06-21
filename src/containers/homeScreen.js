import React from 'react';
import Expo, {MapView} from 'expo';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';

import {Icon, Text, Button, SearchBar} from 'react-native-elements';

import {header as Header} from '../components/header';
import FullButton from '../components/fullButton';

import {colors} from '../styles';

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}/>
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

      {/*<FullButton icon='location-arrow' title='Pick Me Up Scotty'/>*/}
    </KeyboardAvoidingView>
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