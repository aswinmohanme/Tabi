import React from 'react';

import {View} from 'react-native';
import {Button, Text, Icon} from 'react-native-elements';
import {colors} from '../styles';

export default RideCard = ({destination}) => {
  return(
        <View style={{width: '100%',backgroundColor: 'white', borderRadius: 4}}>
          <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', padding:10}}>
              <Icon name="circle" size={12} color={colors.btnPrimColor}type="font-awesome"/>
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 14, fontFamily: 'karla', color: colors.txtColorLight}}>PickUp Location</Text>
                <Text style={{fontSize: 16, marginTop: 2, fontFamily: 'karla-bold', color: colors.txtColor}}>Your Location</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', padding:10}}>
              <Icon name="circle" size={12} color={colors.btnPrimColor}type="font-awesome"/>
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 14, marginTop: 6,fontFamily: 'karla', color: colors.txtColorLight}}>Destination</Text>
                <Text style={{fontSize: 16, marginTop: 2, fontFamily: 'karla-bold', color: colors.txtColor}}>{destination}</Text>
              </View>
            </View>
          </View>
        </View>
  );
}