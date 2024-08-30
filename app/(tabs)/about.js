import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import Constants from 'expo-constants';


export default function Page() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.tittleText}>Calculadora de Sueño</Text>

      <Text style={styles.infoText}>Selecciona la hora a la que te quieres despertar</Text>

      <View style={styles.containerClock}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'time'}
          is24Hour={true}
          onChange={onChange}
          display='spinner'
          textColor='#E0E1DD'
          minuteInterval={5}
        />
      </View>
      <View style={styles.containerButton}>
        <Pressable
          style={styles.button}
          onPress={() => setShow(true)}
        >
          <Text>Calcular</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#415A77',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 20
  },
  tittleText: {
    color: '#ebd14f',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 20,
    height: 50,
    width: '100%',
  },
  containerClock: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
    borderRadius: 50,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: 50,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebd14f',
    borderRadius: 50,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#ebd14f',
    padding: 10,
    borderRadius: 5
  }
});



