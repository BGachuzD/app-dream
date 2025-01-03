import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Pressable, Platform } from 'react-native';
import { getNotes } from '../../../services/api/products';
import { ContainerStyles, TitleViewStyles } from '../../../styles/globals';
import TitleView from '../../../components/Text/TitleView';
import { useEffect, useState } from 'react';

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
      <TitleView title="Pasteleria Maru" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: ContainerStyles,
  cardContainer: {
    flexDirection: 'column',
    marginVertical: 20,
    borderRadius: 30,
    padding: 20,
    elevation: 5,
  },
  switchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tabContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  tittleText: TitleViewStyles,
  infoText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 20,
    height: 50,
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
    lineHeight: 20,
    flexWrap: 'wrap',
  },
  containerClock: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: 50,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebd14f',
    borderRadius: 50,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  button: {
    backgroundColor: '#ebd14f',
    padding: 10,
    borderRadius: 5
  }
});

