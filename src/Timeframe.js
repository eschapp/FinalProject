import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

export default class TimeframePicker extends Component {
  static propTypes = {
    title: React.PropTypes.string,
  };
  static defaultProps = {
    title: 'Timeframe',
  };

  render() {
    return (
      <View>
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
    )
  }
}
