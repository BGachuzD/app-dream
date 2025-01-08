import { Stack } from 'expo-router';
import { UserProvider } from '../context/UserContext';
import Toast, { BaseToast } from 'react-native-toast-message';
import { Provider as PaperProvider } from 'react-native-paper';

export default function RootLayout() {

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'green' }}
        text1Style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      />
    ),
    error: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'red' }}
        text1Style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      />
    ),
  };

  return (

    <PaperProvider>
      <UserProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          {/* Roles */}
          <Stack.Screen name="admin" options={{ headerShown: false }} />
          <Stack.Screen name="owner" options={{ headerShown: false }} />
          <Stack.Screen name="employee" options={{ headerShown: false }} />
          {/* Auth */}
          <Stack.Screen name="auth" options={{ headerShown: false }} />
          {/* Admin */}
        </Stack>
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </UserProvider>
    </PaperProvider>
  );
}
