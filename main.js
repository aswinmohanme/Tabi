import Expo, { MapView } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import {Header, Icon, Text, Button} from 'react-native-elements';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontsLoaded: false,
    };

    this.render = this.render.bind(this);
  }

  async componentWillMount(){
    await Expo.Font.loadAsync({
      'karla-bold': require('./assets/fonts/Karla-Bold.ttf'),
      'karla': require('./assets/fonts/Karla-Regular.ttf')
    });
    this.setState({fontsLoaded: true});
  }

  render() {
    if(this.state.fontsLoaded)
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
          <Header
            leftComponent={<Icon name='menu'/>}
            centerComponent={<Text style={{fontFamily: 'karla', fontSize: 18}}>Tabi</Text>}
            outerContainerStyles={{height: 64, alignSelf: 'flex-end'}}
            backgroundColor='#fff'
          />
          <View style={{flex: 1}}></View>
          <Button 
            title="Pick This Location"
            icon={{name: 'location-arrow', type: 'font-awesome'}}
            textStyle={{fontFamily: 'karla-bold'}}
            containerViewStyle={{width: '100%'}}
            buttonStyle={{height: 48, width: '100%'}}
            backgroundColor='#1abc9c'
          />
        </View>
      );
    else
      return(<Expo.AppLoading/>);

  }
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

Expo.registerRootComponent(App);
