import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Inicio',
            title: 'Inicio',
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
