import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native'


export default class StartPage extends React.Component {

  render() {
    return (

      <View style={{flex: 1,
        }}>

          <View style={{
            flex: 1,
            backgroundColor: 'powderblue',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>Rent a desk</Text>
            <Image
            source={require('./images/interviewroom.png')}
            />
          </View>

        <View style={{flex: 1,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text>Host A Coworker</Text>

          <Image
          source={require('./images/deskforrent.png')}
          />
          </View>
      </View>


    );
  }

}
