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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Air Chair
        </Text>

        <Text style={styles.instructions}>
          Rent a desk || Host a coworker.
        </Text>
      <View style={{flex: .5}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}><Text>Hey here is a test that I'm trying to figure out... Seemes like it may work. What happens with the overflow?</Text></View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}><Text>Test</Text></View>
      </View>

      <MapView
        style={{
          height: 200,
          width: 300,
        }}

        onRegionChange={() => {}}
        onRegionChangeComplete={() => {}}
        showsUserLocation={true}
      />


      <Picker
          style={{width: 100,}}
          selectedValue={(this.state && this.state.pickerValue) || 'Today' }
          onValueChange={(value) => {
            this.setState({value})
          }}>
        <Picker.Item label={'Today'} value={'Today'} />
        <Picker.Item label={'Tomorrow'} value={'Tomorrow'} />
      </Picker>

    </View>
    );
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
});
