import React from 'react';
import { Button, Icon} from 'react-native-elements';
import { colors } from '../styles';

export default FullButton = ({title, icon, iconType, onPressCall}) => {
  return(
    <Button 
      title={title}
      raised
      onPress={onPressCall}
      icon={{name: icon, type: iconType || 'font-awesome'}} 
      textStyle={{fontFamily: 'karla-bold', fontSize: 16, color: colors.bgColor}}
      containerViewStyle={{width: '100%'}}
      buttonStyle={{height: 48, width: '100%'}}
      backgroundColor={colors.btnPrimColor}
    />
  );
}
