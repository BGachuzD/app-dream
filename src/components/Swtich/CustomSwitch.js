import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-paper';
import { Colors } from '../../styles/globals';
export default function CustomSwitch() {
  const [isOn, setIsOn] = useState(false);
  const position = new Animated.Value(isOn ? 30 : 0);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    Animated.timing(position, {
      toValue: isOn ? 0 : 30,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        onPress={toggleSwitch}
        style={{
          width: 60,
          height: 30,
          borderRadius: 15,
          backgroundColor: isOn ? Colors.blue : '#dcdde1',
          justifyContent: 'center',
        }}
      >
        <Animated.View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#fff',
            position: 'absolute',
            transform: [{ translateX: position }],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {
            isOn ? (
              <Icon
                source="calendar-multiselect"
                size={20}
                color={Colors.blue}
              />
            ) : (
              <Icon
                source="table"
                size={20}
                color={Colors.primary}
              />
            )
          }
        </Animated.View>
      </TouchableOpacity>
      <Text
        style={{ marginTop: 2 }}
      >{isOn ? 'Calendario' : 'Lista'}</Text>
    </View >
  );
}
