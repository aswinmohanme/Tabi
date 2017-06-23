import React from 'react';
import { Button } from 'react-native-elements';
import { colors } from '../styles';

export default FullButton = ({title, icon, iconType, onPressCall}) => {
  return(
    <Button 
      title={title}
      onPress={onPressCall}
      icon={{name: icon, type: iconType || 'font-awesome'}} 
      textStyle={{fontFamily: 'karla-bold'}}
      containerViewStyle={{width: '100%'}}
      buttonStyle={{height: 56, width: '100%'}}
      backgroundColor={colors.btnPrimColor}
    />
  );
}
