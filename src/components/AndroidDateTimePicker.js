import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AndroidDateTimePicker = ({ value, onChange, mode = 'time', minuteInterval = 5 }) => {
  const [show, setShow] = useState(false);

  const togglePicker = () => {
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={togglePicker} style={styles.input}>
        <Text style={styles.inputText}>
          {mode === 'time' ? value.toLocaleTimeString() : value.toDateString()}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={value}
          mode={mode}
          display="compact"
          onChange={(event, selectedDate) => {
            togglePicker();
            onChange(event, selectedDate);
          }}
          minuteInterval={minuteInterval}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  pickerContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  doneText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AndroidDateTimePicker;
