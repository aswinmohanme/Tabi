import React from 'react';
import Expo, { MapView } from 'expo';
import { StyleSheet, View } from 'react-native';

import {Icon, Text, Button} from 'react-native-elements';

import {header as Header } from '../components/header';
import {colors} from '../styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Header title={'Tabi'}/>

      <View style={{flex: 1}}></View>

      <Button 
        title="Pick This Location"
        icon={{name: 'location-arrow', type: 'font-awesome'}}
        textStyle={{fontFamily: 'karla-bold'}}
        containerViewStyle={{width: '100%'}}
        buttonStyle={{height: 48, width: '100%'}}
        backgroundColor={colors.btnPrimColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Expo.Constants.statusBarHeight,
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;