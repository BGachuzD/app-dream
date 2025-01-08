import { Drawer } from 'expo-router/drawer';

export default function AuthLayout() {
  return (
    <Drawer
      initialRouteName="welcome"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 30 },
      }}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="welcome"
        options={{
          title: 'Bienvenido',
          drawerLabel: 'Inicio',
        }}
      />
      <Drawer.Screen name="login" options={{ title: 'Iniciar Sesión' }} />
      <Drawer.Screen name="signup" options={{ title: 'Registrarse' }} />
    </Drawer>
  );
}
