import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getNotes } from '../../../services/api/products';
import { ContainerStyles } from '../../../styles/globals';
import { useEffect, useState } from 'react';
import ScrollViewCustom from '../../../components/ScrollView/ScrollViewCustom';
import TitleView from '../../../components/Text/TitleView';
import TextView from '../../../components/Text/TextView';
import MyGrid from '../../../components/Grid/MyGrid';

export default function Page() {
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
      <TitleView title="Pasteleria" />
      <ScrollViewCustom>
        <TextView text="Productos en mostrador" />
        <MyGrid products={products} />
      </ScrollViewCustom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: ContainerStyles,
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    backgroundColor: '#f2f2f2',
    height: 100,
  },
});

