import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import { Colors } from '../../../styles/globals';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.pink,
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
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={32} color={color} />,
          headerShadowVisible: true,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Pedidos',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="fact-check" size={32} color={color} />,
          headerShadowVisible: true,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
