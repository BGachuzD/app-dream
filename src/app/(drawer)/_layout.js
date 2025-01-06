import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Colors } from '../../styles/globals';

export default function DrawerLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: Colors.primary,
          drawerActiveTintColor: Colors.white,
          drawerInactiveTintColor: Colors.primary,
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: Colors.white,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Pastelería',
            title: 'Pastelería',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Configuración',
            title: 'Configuración',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}


