import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import {
  Link,
} from 'react-router-native'

export default class StartPage extends React.Component {

  render() {
    return (

      <View style={{flex: 1,
        }}>
        <Link
          to="/timeframe"
          style={styles.switcherLink}
          activeStyle={styles.switcherLinkActive}
          underlayColor="transparent"
        >
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
        </Link>

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
