import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import {View, Dimensions} from 'react-native';
import { colors } from '../styles';

export const header = ({title, icon, iconType}) => {
  return(
    <Header
      leftComponent={<Icon size={24} name={icon} type={iconType}/>}
      centerComponent={<View style={{ width: Dimensions.get('window').width * 0.6, paddingBottom: 2 }}><Text style={{fontFamily: 'karla-bold', fontSize: 18}}>{title}</Text></View>}
      rightComponent={<Icon size={18} name={'bell'} type={'simple-line-icon'}/>}
      outerContainerStyles={{padding:24}}
      backgroundColor={colors.headColor}
    />
  );
}
