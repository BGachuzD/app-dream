import { Drawer } from 'expo-router/drawer';

export default function AuthLayout() {
  return (
    <Drawer
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="welcome"
        options={{
          title: 'Bienvenido',
          drawerLabel: 'Inicio',
        }}
      />
      <Drawer.Screen name="login" options={{ title: 'Iniciar Sesión' }} />
    </Drawer>
  );
}
