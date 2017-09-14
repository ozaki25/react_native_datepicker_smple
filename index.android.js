import React, { Component } from 'react';
import {
  AppRegistry,
  DatePickerAndroid,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class ReactNativeDatepickerSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }

  onPressButton() {
    this.openDatepicker();
  }

  onFocusInput() {
    this.openDatepicker();
  }

  async openDatepicker() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: this.state.date || new Date(1990, 0, 1),
        mode: 'spinner',
      });
      if(action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          date: new Date(year, month, day)
        });
      }
    } catch ({ code, message }) {
      alert(`Cannot open date picker ${message}`)
    }
  }

  render() {
    const year = this.state.date ? String(this.state.date.getFullYear()) : '';
    const month = this.state.date ? String(this.state.date.getMonth() + 1) : '';
    const date = this.state.date ? String(this.state.date.getDate()) : '';
    return (
      <View style={styles.container}>
        <View style={styles.inputDateGroup}>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={year} />
          <Text>年</Text>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={month} />
          <Text>月</Text>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={date} />
          <Text>日</Text>
          <TouchableOpacity style={styles.button} onPress={this.onPressButton.bind(this)}>
            <Text>Calendar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputDateGroup: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputDate: {
    textAlign: 'right',
    width: 40,
  },
  button: {
    alignItems: 'center',
    width: 100,
  },
});

AppRegistry.registerComponent('ReactNativeDatepickerSample', () => ReactNativeDatepickerSample);
