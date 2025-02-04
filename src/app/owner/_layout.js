import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { Colors } from '../../styles/globals';
import { roleString } from '../../utils/roleString';
import { UserContext } from '../../context/UserContext';
import Constants from 'expo-constants';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { Picker } from '@react-native-picker/picker';
import CustomDropdown from '../../components/Select/CustomDropdown';

const showToast = () => {
  console.log('Toast');
  Toast.show({
    type: 'info', // También puedes usar 'error' o 'info'
    text1: 'Cerrando sesión',
    text2: 'Has cerrado sesión correctamente',
  });
}

export default function Role1Layout() {
  const { user, logout } = useContext(UserContext);


  function CustomDrawerContent({ navigation, user, logout }) {
    const [selectedLanguage, setSelectedLanguage] = useState();

    const handleButtonPress = () => {
      showToast();

      setTimeout(() => {
        logout();
      }, 3000);

      navigation.navigate('auth');
    };

    useEffect(() => {
      setSelectedLanguage('java');
    }, []);

    return (
      <View style={styles.drawerContainer}>
        <View style={styles.contentInfo}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://scontent.fmex16-1.fna.fbcdn.net/v/t39.30808-1/469554906_2560273970849009_309401191351698823_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGsQc7_TUjmb2N36XVlf9vpXqiDlI1gYxVeqIOUjWBjFZ3qw7P8fhH3NiylrovsnYB5p4WpXu0fslTiw5PYVrY8&_nc_ohc=UY-lftzU2FIQ7kNvgHmJIfJ&_nc_zt=24&_nc_ht=scontent.fmex16-1.fna&_nc_gid=Azf_bTCp4-7kwwlcxYPQRzm&oh=00_AYDKrmfhENKP8BdbjuXMAke3GsOcr-YvLonDletjnOiLfQ&oe=678224DD' }}
              style={styles.avatar}
            />
            <Text style={styles.username}>{user?.name}</Text>
            <Text style={styles.userRole}>{user?.role ? roleString(user?.role) : ''}</Text>
          </View>

          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('dashboard')}
          >
            <Text style={styles.drawerItemText}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('categories')}
          >
            <Text style={styles.drawerItemText}>Categorias</Text>
          </TouchableOpacity>
          <CustomDropdown />
        </View>


        <Button
          icon="logout"
          mode="outlined"
          onPress={handleButtonPress}
          style={styles.button}
        >
          Cerrar Sesión
        </Button>
      </View>
    );
  }

  return (
    <>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerActiveBackgroundColor: Colors.primary,
          drawerActiveTintColor: Colors.white,
          drawerInactiveTintColor: Colors.primary,
          headerStyle: { backgroundColor: Colors.primary },
          headerTintColor: Colors.white,
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} user={user} logout={logout} />}
      >
        <Toast />
        <Drawer.Screen name="dashboard" options={{ title: 'Dashboard' }} />
        <Drawer.Screen name="categories" options={{ title: 'Categorias' }} />
      </Drawer>
    </>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    justifyContent: 'space-between',
  },
  contentInfo: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userRole: {
    fontSize: 14,
  },
  button: {
    width: 200,
    alignSelf: 'center',
    marginBottom: 20,
    color: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  drawerItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  drawerItemText: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});