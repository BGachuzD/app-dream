import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import CustomTextInput from "../Input/CustomTextInput";
import { Colors } from "../../styles/globals";
import GradientButton from "../Buttons/GradientButton";

export const RegisterView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Registro</Text>
      <Text style={styles.text}>Ingresa tus datos para continuar</Text>
      <CustomTextInput
        label="Nombre"
        placeholder="Nombre"
      />
      <CustomTextInput
        label="Apellido"
        placeholder="Apellido"
      />

      <GradientButton
        text="Registrarme"
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
    color: Colors.primary,
  },
});