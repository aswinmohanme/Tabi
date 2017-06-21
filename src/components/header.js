import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { colors } from '../styles';

export const header = ({title, icon, iconType}) => {
  return(
    <Header
      leftComponent={<Icon size={24} name={icon} type={iconType || ''}/>}
      centerComponent={<Text style={{fontFamily: 'karla', fontSize: 18}}>{title}</Text>}
      outerContainerStyles={{height: 56}}
      backgroundColor={colors.bgColor}
    />
  );
}
