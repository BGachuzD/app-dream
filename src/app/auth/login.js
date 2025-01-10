import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import ButtonBack from '../../components/Buttons/ButtonBack';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { LoginView } from '../../components/Views/ViewLogin';
import { RegisterView } from '../../components/Views/ViewSignUp';
import { Colors } from '../../styles/globals';

export default function Dashboard() {
  const navigation = useNavigation();
  const [value, setValue] = useState('login');

  // Animación para el borde inferior
  const loginBorderWidth = useRef(new Animated.Value(1)).current;
  const registerBorderWidth = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animar el borde inferior cuando cambia el valor
    if (value === 'login') {
      Animated.timing(loginBorderWidth, {
        toValue: 4,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(registerBorderWidth, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(registerBorderWidth, {
        toValue: 4,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(loginBorderWidth, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <ButtonBack title="Regresar" route="welcome" navigation={navigation} />
      <Text style={styles.text}>Pastelería</Text>

      <View style={styles.containerButtons}>
        {/* Botón de "Iniciar Sesión" */}
        <Animated.View
          style={[
            styles.buttonContainer,
            { borderBottomWidth: loginBorderWidth, borderBottomColor: Colors.primary },
          ]}
        >
          <Button
            mode="contained"
            onPress={() => setValue('login')}
            style={styles.button}
          >
            <Text
              style={value === 'login' ? styles.textActive : styles.textButton}
            >
              Iniciar Sesión
            </Text>
          </Button>
        </Animated.View>
        {/* Botón de "Registrarse" */}
        <Animated.View
          style={[
            styles.buttonContainer,
            { borderBottomWidth: registerBorderWidth, borderBottomColor: Colors.primary },
          ]}
        >
          <Button
            mode="contained"
            onPress={() => setValue('register')}
            style={styles.button}
          >
            <Text
              style={value === 'register' ? styles.textActive : styles.textButton}
            >
              Registrarse
            </Text>
          </Button>
        </Animated.View>
      </View>

      {
        value === 'login' ? <LoginView /> : <RegisterView />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '50%',
    alignItems: 'center',
    borderRadius: 2,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 0,
    width: '100%',
  },
  textButton: {
    color: 'black',
  },
  textActive: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});
