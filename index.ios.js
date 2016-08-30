import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import {DeskNomad} from './DeskNomad.js'
import StartPage  from './StartPage.js'
import TimeframePicker from './Timeframe.js'
import NeedWifi from './NeedWifi.js'
import NeedPrivacy from './NeedPrivacy.js'
import Listings from './Listings.js'
import Login from './Login.js'
import UserProfile from './UserProfile.js'

class Project extends Component {

  render() {
    return (

      <View style={{
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center'
        }}>

        {/* <DeskNomad /> */}
        {/* <StartPage /> */}
        {/* <TimeframePicker /> */}
        <NeedWifi />
        {/* <NeedPrivacy /> */}
        {/* <Listings /> */}
        {/* <Login /> */}
        {/* <UserProfile /> */}

      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('Project', () => Project)
