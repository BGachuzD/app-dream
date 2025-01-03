import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import { Colors } from '../../../styles/globals';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.pink,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Mostrador',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Pedidos',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialIcons name="fact-check" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'Usuario',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="user-alt" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
