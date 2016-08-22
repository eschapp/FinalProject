import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  Picker,
} from 'react-native'

export default class StartPage extends React.Component {

  render() {
    return (

      <View style={{flex: 1,
        }}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}><Text>Rent a desk</Text></View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}><Text>Host A Coworker</Text></View>
      </View>


    );
  }

}
