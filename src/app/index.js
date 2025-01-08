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

  if (!user.token) {
    // Si el usuario tiene un token, redirige a la página correspondiente a su rol
    return <Redirect href={`/auth`} />;
  }

  return <Redirect href={`/${user.role}`} />;
}
