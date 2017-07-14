import React, {Component} from 'react';
import Expo, {AppLoading} from 'expo';
import {Text, Avatar, Rating} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

import {} from 'mobx';
import {inject, observer} from 'mobx-react';

import FireBase from '../stores/fireBase';
import RideCard from '../components/rideCard';
import FullButton from '../components/fullButton';
import {colors} from '../styles';

@inject('locationStore')
@observer
class DriverDetailsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      didLoad: false,
      driver: {}
    };

    this.render = this
      .render
      .bind(this);
  }

  async componentWillMount() {
    this.fireBase = await FireBase
      .database()
      .ref()
      .child('drivers/' + this.props.navigation.state.params.id);
    // fireBase =  FireBase.database().ref().child('drivers/' + '1');
    snapshot = await this
      .fireBase
      .once('value');

    details = snapshot.val();
    this.setState({driver: details, didLoad: true});
  }

  async _handlePress() {
    await this
      .fireBase
      .child('/ride')
      .update({rideId: 1, requestedUser: 1});
  }

  render() {
    const {driver} = this.state;
    const {locationStore} = this.props;
    if (this.state.didLoad) 
      return (
        <View
          style={{
          flex: 1,
          backgroundColor: colors.bgColor
        }}>
          <View style={styles.container}>
            <View
              style={{
              margin: 40,
              alignItems: 'center'
            }}>
              <Avatar
                xlarge
                rounded
                source={{
                uri: 'https://api.adorable.io/avatars/285/amal@adorable.io.png'
              }}/>
              <Text style={styles.name}>{driver.name}</Text>
              <Text style={styles.phone}>{driver.phone}</Text>
              <Rating
                readonly
                imageSize={18}
                style={[
                styles.rating, {
                  marginTop: 10
                }
              ]}/>
            </View>

            <View style={{
              width: '100%',
            }}>
              <RideCard
                destination={locationStore.destination.name}
                distance={locationStore.distance / 1000}
                time={parseInt(locationStore.time / 60)}/>
            </View>

            <View style={{
              marginBottom: 5,
            }}>
              <View
                style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}>
                <Text
                  style={{
                  fontSize: 18,
                  color: colors.txtColor,
                  fontFamily: 'karla'
                }}>Ride Cost </Text>
                <Text
                  style={{
                  fontSize: 24,
                  marginLeft: 4,
                  color: colors.txtColor,
                  fontFamily: 'karla-bold'
                }}>${driver.cpk * locationStore.distance / 1000}</Text>
              </View>
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
              <FullButton
                onPressCall={this
                ._handlePress
                .bind(this)}
                title="Come Pick Me Up"
                icon="paper-plane"/>
              </View>
          </View>
        </View>
      );
    else 
      return (<AppLoading/>)
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
    borderRadius: 5
  },
  name: {
    margin: 10,
    marginTop: 16,
    fontFamily: 'karla-bold',
    fontSize: 18,
    color: colors.txtColor
  },
  phone: {
    fontSize: 18,
    fontFamily: 'karla',
    color: colors.txtColorLight
  },
  rating: {
    backgroundColor: 'red',
  }
});
export default DriverDetailsScreen;