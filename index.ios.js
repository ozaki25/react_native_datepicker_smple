import React, { Component } from 'react';
import {
  AppRegistry,
  DatePickerIOS,
  Modal,
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
      modalVisible: false,
    };
  }

  onPressButton() {
    this.openDatepicker();
  }

  onFocusInput() {
    this.openDatepicker();
  }

  openDatepicker() {
    this.setState({ modalVisible: true });
  }

  onDateChange(date) {
    this.setState({ date: date });
  }

  onPressCloseModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    const date = this.state.date || new Date(1990, 0, 1);
    const year = this.state.date ? String(this.state.date.getFullYear()) : '';
    const month = this.state.date ? String(this.state.date.getMonth() + 1) : '';
    const day = this.state.date ? String(this.state.date.getDate()) : '';
    return (
      <View style={styles.container}>
        <View style={styles.inputDateGroup}>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={year} />
          <Text>年</Text>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={month} />
          <Text>月</Text>
          <TextInput style={styles.inputDate} onFocus={this.onFocusInput.bind(this) } value={day} />
          <Text>日</Text>
          <TouchableOpacity style={styles.button} onPress={this.onPressButton.bind(this)}>
            <Text>Calendar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          <Modal
             animationType="slide"
             transparent={true}
             visible={this.state.modalVisible}>
            <View style={styles.modalContents}>
              <View style={styles.datePickerContainer}>
                <DatePickerIOS date={date} mode="date" onDateChange={this.onDateChange.bind(this)} />
                <TouchableOpacity style={styles.closeButton} onPress={this.onPressCloseModal.bind(this)}>
                  <Text>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
    marginTop: 25,
  },
  inputDate: {
    textAlign: 'right',
    width: 40,
  },
  button: {
    alignItems: 'center',
    width: 100,
  },
  modalContainer: {
  },
  modalContents: {
    flex: 1,
    backgroundColor: '#424242',
    opacity: 0.9,
    justifyContent: 'center',
  },
  datePickerContainer: {
    backgroundColor: '#f5f5f5',
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  closeButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 100,
  },
});

AppRegistry.registerComponent('ReactNativeDatepickerSample', () => ReactNativeDatepickerSample);
