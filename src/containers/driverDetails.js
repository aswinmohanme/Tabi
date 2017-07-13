
import React, { Component } from 'react';
import Expo, {AppLoading} from 'expo';
import {Text, Avatar, Rating} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

import FireBase from '../stores/fireBase';
import RideCard from '../components/rideCard';
import FullButton from '../components/fullButton';

class DriverDetailsScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      didLoad: false,
      driver: {
      }
    };

    this.render = this.render.bind(this);
  }

  async componentWillMount(){
    // this.fireBase = await Firebase.database().ref().child('drivers/' + this.props.navigation.state.params.id);
    fireBase =  FireBase.database().ref().child('drivers/' + '1');
    snapshot =  await fireBase.once('value');

    details = snapshot.val();
    this.setState({
      driver: details,
      didLoad: true,
    });
  }

  async _handlePress() {
    fireBase =  FireBase.database().ref().child('drivers/' + '1' + '/ride');
    await fireBase.update({
        rideId: 1,
        requestedUser: 1,
    });
  }

  render() {
    // if(this.state.didLoad)
      return(
        <View style={{flex: 1}}>
        <View style={styles.container}> 
          <View style={{margin: 40, marginTop:60 ,alignItems: 'center'}}>
            <Avatar xlarge rounded source={{uri: 'https://api.adorable.io/avatars/285/amal@adorable.io.png'}}/>
            <Text style={styles.name}>Aswin Mohan</Text>
            <Text style={styles.phone}>8589931950</Text>
            <Rating readonly imageSize={24} style={[styles.rating, {marginTop: 20}]}/>
          </View>

          <RideCard />
          <View>
            <Text> Ride Cost</Text>
            <Text>$ 48</Text>
          </View>
          <View style={{flex: 1}}></View>
          <FullButton onPressCall={this._handlePress.bind(this)} title="Come Pick Me Up" icon="paper-plane" />
        </View>
        </View>
      );
    // else
      // return(<AppLoading />)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    marginTop: Expo.Constants.statusBarHeight + 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 50,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  name: {
    margin: 10,
    marginTop: 24,
    fontFamily: 'karla-bold',
    fontSize: 18,
  },
  phone: {
    fontSize: 18,
    fontFamily: 'karla',
  },
  rating: {
    backgroundColor: 'red',
  }
});
export default DriverDetailsScreen;