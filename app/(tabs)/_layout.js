import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ebd14f',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#0D1B2A',
          borderTopWidth: 0,
          animate: true,
          borderCurve: 10,
          width: '100%',
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Actividades Diarias',
          headerShown: false,
          tabBarIcon: ({ color }) => <Entypo name="list" size={24} color={color} />,
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Calculadora de Sueño',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome6 name="bed" size={24} color={color} />,
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'Pase lista',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome6 name="list" size={24} color={color} />,
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
    </Tabs>
  );
}
