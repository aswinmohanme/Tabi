import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { colors } from '../styles';

export const header = ({title, icon, iconType}) => {
  return(
    <Header
      leftComponent={<Icon size={24} name={icon} type={iconType || ''}/>}
      centerComponent={<Text style={{fontFamily: 'karla', fontSize: 16}}>{title}</Text>}
      outerContainerStyles={{height: 56, alignSelf: 'flex-end'}}
      backgroundColor={colors.bgColor}
    />
  );
}
