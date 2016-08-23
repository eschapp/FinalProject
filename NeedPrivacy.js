import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

export default class NeedPrivacy extends React.Component {

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
          <Text>Privacy Please</Text>
          <Image
          source={require('./images/door.png')}
          />
        </View>
        <View style={{flex: 1,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text>Open Format is Fine</Text>

          <Image
          source={require('./images/hierarchical-structure.png')}
          />
          </View>
      </View>


    );
  }

}
