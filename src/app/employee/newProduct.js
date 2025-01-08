import { View, Text, StyleSheet } from 'react-native';

export default function newProduct() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de nuevo producto</Text>
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
});
