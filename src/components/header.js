import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { colors } from '../styles';

export const header = ({title}) => {
  return(
    <Header
      leftComponent={<Icon name='menu'/>}
      centerComponent={<Text style={{fontFamily: 'karla', fontSize: 18}}>{title}</Text>}
      outerContainerStyles={{height: 56, alignSelf: 'flex-end'}}
      backgroundColor={colors.bgColor}
    />
  );
}
