import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Button, Text } from 'react-native-paper';
import { Colors } from '../../styles/globals';
import { UserContext } from '../../context/UserContext';
import { roleString } from '../../utils/roleString';

export default function CustomDropdown() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('Rol');
  const { changeRole, user } = useContext(UserContext);


  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const options = [{
    value: 'admin',
    label: 'Administrador',
  }, {
    value: 'owner',
    label: 'Propietario',
  }, {
    value: 'employee',
    label: 'Empleado',
  }];

  const handleChangeRole = (role) => {
    setSelected(role.label); // Almacena solo la etiqueta del rol seleccionado
    changeRole(role.value); // Cambia el rol usando el valor del rol
  };


  useEffect(() => {
    if (user) {
      setSelected(roleString(user.role));
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu} style={styles.buttonPicker}>
            <Text style={{ color: Colors.primary }}>
              {selected}
            </Text>
          </Button>
        }>
        {
          options.map((option, index) => (
            <Menu.Item
              key={index}
              onPress={() => {
                handleChangeRole(option);
                closeMenu();
              }}
              title={option.label}
            />
          ))
        }
      </Menu >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonPicker: {
    width: 150,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
});
