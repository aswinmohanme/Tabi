import React from 'react';

import {View, Button, Text, Icon} from 'react-native-elements';

export default RideCard = ({}) => {
  return(
        <View style={{width: '90%',backgroundColor: 'white', marginBottom: 40, borderRadius: 4}}>
          <View style={{padding: 10, paddingBottom: 0}}>
            <View style={{flexDirection: 'row', padding:10}}>
              <Icon name="circle" size={12} type="font-awesome"/>
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 14, fontFamily: 'karla-bold'}}>PickUp Location</Text>
                <Text style={{fontSize: 18, marginTop: 2, fontFamily: 'karla-bold'}}>Noornad</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', padding:10}}>
              <Icon name="circle" size={12} type="font-awesome"/>
              <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 14, marginTop: 10,fontFamily: 'karla-bold'}}>Destination</Text>
                <Text style={{fontSize: 18, marginTop: 2, fontFamily: 'karla-bold'}}>Adoor</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}></View>
          <View style={{width: '100%', alignItems: 'center'}}>
          <FullButton title="Beam Me Up Scotty" icon="paper-plane"/>
          </View>
        </View>
  );
}