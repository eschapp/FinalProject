import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  Picker,
} from 'react-native'

export default class NeedWifi extends React.Component {

  render() {
    return (

      <View style={{flex: 1,
        }}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}><Text>Wifi Needed</Text></View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}><Text>I'll supply my own wifi!</Text></View>
      </View>


    );
  }

}
