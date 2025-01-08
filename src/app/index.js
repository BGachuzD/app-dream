import { useContext } from 'react';
import { Redirect } from 'expo-router';
import { UserContext } from '../context/UserContext';
import { ActivityIndicator, View } from 'react-native';

export default function RedirectPage() {
  const { user } = useContext(UserContext);

  if (!user) {
    // Mientras se obtienen los datos del usuario, muestra un indicador de carga
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Redirect href={`/${user.role}`} />;
}
