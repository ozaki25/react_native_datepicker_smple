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
      year: '',
      month: '',
      day: '',
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
      const defaultYear = this.state.year ? Number(this.state.year) : 1990;
      const defaultMonth = this.state.month ? Number(this.state.month) - 1 : 0;
      const defaultDay = this.state.day ? Number(this.state.day) : 1;

      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date(defaultYear, defaultMonth, defaultDay),
        mode: 'spinner',
      });
      if(action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          year: String(year),
          month: String(month + 1),
          day: String(day),
        });
      }
    } catch ({ code, message }) {
      alert(`Cannot open date picker ${message}`)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputDateGroup}>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={this.state.year} />
          <Text>年</Text>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={this.state.month} />
          <Text>月</Text>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={this.state.day} />
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
