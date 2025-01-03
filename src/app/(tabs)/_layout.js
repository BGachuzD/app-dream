import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import { Colors } from '../../styles/globals';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.pink,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: Colors.white,
          animate: true,
          borderCurve: 10,
          width: '100%',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Mostrador',
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name="home" size={32} color={Colors.pink} />,
          headerShadowVisible: true,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Pedidos',
          headerShown: false,
          tabBarIcon: () => <MaterialIcons name="fact-check" size={32} color={Colors.pink} />,
          headerShadowVisible: true,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'Pedidos',
          headerShown: false,
          tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} color={Colors.pink} />,
          headerShadowVisible: true,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}
