import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GradientButton from "../Buttons/GradientButton";
import { Colors } from "../../styles/globals";
import CustomTextInput from "../Input/CustomTextInput";
import { useNavigation } from "expo-router";
import { login } from "../../services/api/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z.string().email("Email inválido").nonempty("El correo es requerido"),
  password: z.string().min(5, "Mínimo 6 caracteres").nonempty("La contraseña es requerida"),
});

export const LoginView = () => {
  const navigate = useNavigation();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Registrar los campos al montar el componente
  React.useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const handleLogin = async (data) => {
    try {
      const response = await login(data.email, data.password);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Iniciar Sesión</Text>
      <Text style={styles.text}>Ingresa tus datos para continuar</Text>

      <CustomTextInput
        label="Correo Electrónico"
        placeholder="example@example.com"
        onChangeText={(text) => setValue("email", text)}
        error={errors.email?.message}
      />

      <CustomTextInput
        label="Contraseña"
        placeholder="********"
        secureTextEntry
        onChangeText={(text) => setValue("password", text)}
        error={errors.password?.message}
      />

      <GradientButton
        text="Entrar"
        onPress={handleSubmit(handleLogin)} // Se usa directamente aquí
        colors={['#d4d8cf', '#89b5bf']}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white, //'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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