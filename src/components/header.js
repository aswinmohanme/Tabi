import React from 'react';
import { Header, Icon, Text } from 'react-native-elements';
import {View, Dimensions} from 'react-native';
import { colors } from '../styles';

export const header = ({title, icon, iconType, onIconPress}) => {
  return(
    <Header
      leftComponent={<Icon onPress={onIconPress} size={24} name={icon} type={iconType}/>}
      centerComponent={<View style={{ width: Dimensions.get('window').width * 0.6, paddingBottom: 2 }}><Text style={{fontFamily: 'karla-bold', fontSize: 18}}>{title}</Text></View>}
      rightComponent={<Icon size={18} name={'bell'} type={'simple-line-icon'}/>}
      outerContainerStyles={{height: 56,padding:18}}
      backgroundColor={colors.headColor}
    />
  );
}
