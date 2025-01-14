import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getNotes } from '../../../services/api/products';
import { ContainerStyles } from '../../../styles/globals';
import { useEffect, useState } from 'react';
import ScrollViewCustom from '../../../components/ScrollView/ScrollViewCustom';
import TitleView from '../../../components/Text/TitleView';
import TextView from '../../../components/Text/TextView';
import MyGrid from '../../../components/Grid/MyGrid';
import CalendarComponent from '../../../components/Calendar/CalendarComponent';
import { Switch } from 'react-native-paper';
import CustomSwitch from '../../../components/Swtich/CustomSwitch';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [listView, setListView] = useState(false);

  const getProducts = async () => {
    const data = await getNotes();
    setProducts(data);
  }

  const onToggleSwitch = () => setListView(!listView);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.row}>
        <TitleView title="Pedidos" />
        <CustomSwitch />
      </View>
      <ScrollViewCustom>
        <TextView text="Proximos pedidos" />
        <View style={{ height: 300 }}>
          <CalendarComponent />
        </View>
      </ScrollViewCustom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: ContainerStyles,
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

