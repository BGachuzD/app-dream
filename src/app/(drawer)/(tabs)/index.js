import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getNotes } from '../../../services/api/products';
import { Colors, ContainerStyles } from '../../../styles/globals';
import { useEffect, useState } from 'react';
import ScrollViewCustom from '../../../components/ScrollView/ScrollViewCustom';
import TitleView from '../../../components/Text/TitleView';
import TextView from '../../../components/Text/TextView';
import MyGrid from '../../../components/Grid/MyGrid';
import { IconButton, MD3Colors, Tooltip } from 'react-native-paper';
import { goTo } from '../../../hooks/useNavigation';
import { useNavigation } from '@react-navigation/native';

export default function Page() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await getNotes();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TitleView title="Mostrador" />
      <ScrollViewCustom>
        <TextView text="Productos en mostrador" />
        <MyGrid products={products} />
      </ScrollViewCustom>
      <View style={styles.addButton}>
        <Tooltip title="Agregar al inventario" visible={true} selected size={36} onPress={() => { }}>
          <IconButton
            icon="plus"
            iconColor={Colors.white}
            style={{ backgroundColor: Colors.pink }}
            size={40}
            onPress={() => {
              goTo(navigation, 'settings');
            }}
          />
        </Tooltip>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: ContainerStyles,
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

