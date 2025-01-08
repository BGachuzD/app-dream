import { View, Text, StyleSheet } from 'react-native';
import ButtonBack from '../../components/Buttons/ButtonBack';
import { useNavigation } from '@react-navigation/native';
import { ContainerStyles } from '../../styles/globals';

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ButtonBack title="Regresar" route="welcome" navigation={navigation} />
      <Text style={styles.text}>Pantalla de Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: ContainerStyles,
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
