import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class NoMatch extends React.Component {

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
          <Text>NO MATCHES FOUND!</Text>

        </View>
        <View style={{flex: 1,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text>Host A Coworker</Text>


          </View>
      </View>


    );
  }

}
