import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import GradientButton from "../Buttons/GradientButton";
import { Colors } from "../../styles/globals";
import CustomTextInput from "../Input/CustomTextInput";
import { useNavigation } from "expo-router";


export const LoginView = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Iniciar Sesión</Text>
      <Text style={styles.text}>Ingresa tus datos para continuar</Text>
      <CustomTextInput
        label="Correo Electrónico"
        placeholder="example@example.com"
      />
      <CustomTextInput
        label="Contraseña"
        placeholder="********"
      />
      <GradientButton
        text="Entrar"
        onPress={() => {
          navigate.navigate('employee');
        }}
        colors={['#d4d8cf', '#89b5bf']}
        //colors={['#4c669f', '#3b59']}
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