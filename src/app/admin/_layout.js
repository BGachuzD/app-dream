import { Drawer } from 'expo-router/drawer';

export default function AdminLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="dashboard" options={{ title: 'Dashboard' }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings' }} />
    </Drawer>
  );
}
