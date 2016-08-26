import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'


const TimeframeStyle = {
  color: 'whitesmoke',
  fontSize: 40,
  fontWeight: 'bold'
}

export default class TimeframePicker extends React.Component {

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
          <Text style={TimeframeStyle}>Today</Text>

        </View>
        <View style={{flex: 1,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text style={TimeframeStyle}>Tomorrow</Text>

        </View>
      </View>


    );
  }

}
