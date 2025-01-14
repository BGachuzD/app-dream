import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomSwitch = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);
  const translateX = useSharedValue(0);

  const toggleSwitch = () => {
    const newIsOn = !isOn; // Usamos un nuevo valor para evitar depender del estado anterior.
    setIsOn(newIsOn);
    translateX.value = withTiming(newIsOn ? 70 : 0, { duration: 300 });
    onToggle(newIsOn);
  };


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSwitch} style={styles.switch}>
        <Animated.View style={[styles.indicator, animatedStyle]}>
          {isOn ?
            <Feather name="moon" size={30} color="#ebd14f" /> :
            <Ionicons name="alarm-outline" size={30} color="#fff" />
          }
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    width: 110,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0D1B2A',
    padding: 5,
  },
  indicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  label: {
    marginLeft: 10,
    fontSize: 18,
    color: 'black',
  },
};

export default CustomSwitch;
