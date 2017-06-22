import Expo from 'expo';
import React, {Component} from 'react';
import { Provider } from 'mobx-react';

import App from './src/app';
import stores from './src/stores';

class Tabi extends Component {
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
        <Provider {...stores}>
          <App />
        </Provider>
      );
    else
      return(
        <Expo.AppLoading />
      );
  }
}
Expo.registerRootComponent(Tabi);
