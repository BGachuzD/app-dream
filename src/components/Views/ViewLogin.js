import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import GradientButton from "../Buttons/GradientButton";


export const LoginView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Iniciar Sesión</Text>
      <Text style={styles.text}>Ingresa tus datos para continuar</Text>
      <TextInput
        label="Correo electrónico"
        mode="outlined"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        label="Contraseña"
        mode="outlined"
        style={styles.input}
        secureTextEntry
      />

      <GradientButton
        text="Entrar"
        onPress={() => { }}
        colors={['#4c669f', '#3b59']}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  input: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});