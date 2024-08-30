import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

const CustomDateTimePicker = ({ value, mode, onChange, is24Hour, textColor, minuteInterval }) => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePicker = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={togglePicker} style={styles.button}>
        <Text style={[styles.buttonText, { color: textColor }]}>
          {mode === 'date' ? value.toDateString() : value.toLocaleTimeString()}
        </Text>
      </TouchableOpacity>

      <Modal isVisible={isVisible} onBackdropPress={togglePicker} style={styles.modal}>
        <View style={styles.pickerContainer}>
          <DateTimePicker
            testID="dateTimePicker"
            value={value}
            mode={mode}
            is24Hour={is24Hour}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(event, selectedDate) => {
              togglePicker();
              onChange(event, selectedDate);
            }}
            textColor={textColor}
            minuteInterval={minuteInterval}
          />
          <Button title="Done" onPress={togglePicker} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#393E46',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    backgroundColor: '#222831',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});

export default CustomDateTimePicker;
