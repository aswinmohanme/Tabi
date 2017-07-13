
import React, { Component } from 'react';
import Expo, {AppLoading} from 'expo';
import {Text} from 'react-native-elements';

import FireBase from '../stores/fireBase';

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
    this.fireBase = await FireBase.database().ref().child('drivers/' + '1');
    snapshot = await this.fireBase.once('value');

    details = snapshot.val();
    this.setState({
      driver: details,
      didLoad: true,
    });
  }

  render() {
    if(this.state.didLoad)
      return(<Text>{this.state.driver.name}</Text>)
    else
      return(<AppLoading />)
  }
}

export default DriverDetailsScreen;