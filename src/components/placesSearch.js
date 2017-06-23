import React from 'react';
import {Dimensions} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Icon} from 'react-native-elements';
import {PLACES_API} from '../config';
import {colors} from '../styles';

export default PlacesSearch = ({onFetch}) => {
  return(
      <GooglePlacesAutocomplete
        placeholder='Where to Senor ?'
        minLength={2} 
        autoFocus={false}
        returnKeyType={'search'} 
        listViewDisplayed='auto' 
        fetchDetails={true}
        renderDescription={(row) => row.description} 
        onPress={(data, details = null) => { 
          let { geometry } = details;
          onFetch({name: details.address_components.formatted_address, lat: geometry.location.lat, lon: geometry.location.lng});
        }}
        getDefaultValue={() => {
          return '';
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: PLACES_API,
          language: 'en', // language of the results
        }}
        styles={{
          description: {
            fontFamily: 'karla',
          },
          textInput: {
            fontFamily: 'karla',
            backgroundColor: colors.bgColor,
            fontSize: 16,
            marginBottom: 8,
            height: 32,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          listView: {
            position: 'absolute',
            marginTop: 54,
            width: Dimensions.get('window').width * 0.9,
            backgroundColor: colors.bgColor,
          },
          textInputContainer: {
            width: '100%',
            borderRadius: 4,
            backgroundColor: colors.bgColor,
            height: 56,
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }
        }}
        nearbyPlacesAPI='GooglePlacesSearch' 
        GoogleReverseGeocodingQuery={{
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: 'distance',
        }}
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        renderLeftButton={() => <Icon name="location" type="evilicon"/>}
      />
            
  );
}