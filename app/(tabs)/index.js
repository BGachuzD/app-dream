import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Pressable, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import CustomSwitch from '../../components/CustomSwitch';
import Constants from 'expo-constants';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomDateTimePicker from '../../components/CustomDateTimePicker';
import AndroidDateTimePicker from '../../components/AndroidDateTimePicker';

import { LinearGradient } from 'expo-linear-gradient';

export default function Page() {
  const [isOn, setIsOn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const handleSwitchChange = (newValue) => {
    setIsOn(newValue);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.tittleText}>Calculadora de Sueño</Text>

      <View style={styles.switchContainer}>
        {isOn ? (
          <View style={styles.tabContent}>
            <Text style={styles.infoText}>Si me duermo ahorita, ¿A qué hora debo despertar?</Text>
          </View>
        ) : (
          <View style={styles.tabContent}>
            <Text style={styles.infoText}>Me quiero despertar a esta hora, ¿A qué hora debo dormirme?</Text>
          </View>
        )}
        <CustomSwitch onToggle={handleSwitchChange} />
      </View>

      <View style={styles.containerClock}>
        {isOn ?
          <Text style={styles.infoText}>
            {date.toTimeString().slice(0, 5)}
          </Text>
          :
          <View>
            {Platform.OS === 'ios' ? (
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
            ) : (
              <AndroidDateTimePicker
                value={date}
                onChange={onChange}
                mode="time"
                minuteInterval={5}
              />
            )}
          </View>
        }
      </View>
      <View style={styles.containerButton}>
        <Pressable
          style={styles.button}
          onPress={() => setShow(true)}
        >
          <Text>
            {isOn ? '¿A qué hora debo despertarme?' : '¿A qué hora debería acostarme?'}
          </Text>
        </Pressable>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 20
  },
  cardContainer: {
    flexDirection: 'column',
    marginVertical: 20,
    borderRadius: 30,
    padding: 20,
    elevation: 5,
  },
  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tabContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: 20,
    flexWrap: 'wrap',
  },
  containerClock: {
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  button: {
    backgroundColor: '#ebd14f',
    padding: 10,
    borderRadius: 5
  }
});

