import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'


const LoginStyle = {
  height: 40,
  borderColor: 'whitesmoke',
  borderWidth: 1,
  height: 40,
  margin: 20,
  textAlign: 'center'
}

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',
      };
  }

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
          <Text>Hello {this.state.name}</Text>
          <Text>Here's your profile</Text>
        </View>

        <View style={{flex: 1,
          backgroundColor: 'steelblue',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          }}>

          <Text>Your Desks</Text>
          <Text>Upcoming, Past, etc</Text>


          </View>
      </View>


    );
  }

}
