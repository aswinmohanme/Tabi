import React from 'react';

import {SearchBar, Icon} from 'react-native-elements';

import {colors} from '../styles';

export default Search = ({}) => {
  return (<SearchBar
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
  }}/>);
}