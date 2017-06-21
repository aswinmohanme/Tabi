import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import { colors } from '../styles';

export const header = ({title, icon, iconType}) => {
  return(
    <Header
      leftComponent={<Icon size={24} name={icon} type={iconType}/>}
      centerComponent={<Text style={{fontFamily: 'karla', fontSize: 16}}>{title}</Text>}
      rightComponent={<Icon size={18} name={'bell'} type={'simple-line-icon'}/>}
      outerContainerStyles={{height: 56, paddingLeft: 24, paddingRight: 24}}
      backgroundColor={colors.headColor}
    />
  );
}
