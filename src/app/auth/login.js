import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image, Dimensions } from 'react-native';
import ButtonBack from '../../components/Buttons/ButtonBack';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { LoginView } from '../../components/Views/ViewLogin';
import { RegisterView } from '../../components/Views/ViewSignUp';
import { Colors } from '../../styles/globals';
import Constants from 'expo-constants';

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
      <View style={styles.iconFixPosition}>
        <Image source={require('../../../assets/gifs/cake.gif')}
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.containerButtons}>
          {/* Botón de "Iniciar Sesión" */}
          <Animated.View
            style={[
              styles.buttonContainerLeft,
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
              styles.buttonContainerRight,
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
        <View style={styles.containerForm}>
          {
            value === 'login' ? <LoginView /> : <RegisterView />
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.blue,
    paddingTop: Constants.statusBarHeight,
  },
  iconFixPosition: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - Dimensions.get('window').height / 2.5,
    left: Dimensions.get('window').width / 2 - 75,
    zIndex: 1,
    backgroundColor: Colors.white,
    borderRadius: 50,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    padding: 20,
    marginTop: '40%',
    alignItems: 'center',
  },
  containerButtons: {
    alignContent: 'center',
    width: Dimensions.get('window').width - 40,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerForm: {
    width: '100%',
    height: 450,
  },
  buttonContainerRight: {
    width: '50%',
    alignItems: 'center',
    borderTopRightRadius: 20,
    backgroundColor: Colors.white,
  },
  buttonContainerLeft: {
    width: '50%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'black',
  },
  textActive: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});
