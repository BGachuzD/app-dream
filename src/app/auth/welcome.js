
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Colors } from '../../styles/globals';

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Bienvenida</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('login')}
      >
        Iniciar sesión
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.pink,
    marginTop: 20,
  },
});
