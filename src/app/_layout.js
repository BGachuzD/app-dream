import { Stack } from 'expo-router';
import { UserProvider } from '../context/UserContext';
import Toast, { BaseToast } from 'react-native-toast-message';
import { Provider as PaperProvider } from 'react-native-paper';
import { Colors } from '../styles/globals';

const ForwardRefToast = () => {
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: Colors.primary }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
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
  return <Toast config={toastConfig} />;
};

export default function RootLayout() {
  return (
    <>
      <ForwardRefToast />
      <PaperProvider>
        <UserProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="admin" options={{ headerShown: false }} />
            <Stack.Screen name="owner" options={{ headerShown: false }} />
            <Stack.Screen name="employee" options={{ headerShown: false }} />
            <Stack.Screen name="auth" options={{ headerShown: false }} />
          </Stack>
        </UserProvider>
      </PaperProvider>
    </>
  );
}
