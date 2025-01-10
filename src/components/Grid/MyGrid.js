import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../styles/globals';
import ScrollViewCustom from '../ScrollView/ScrollViewCustom';
import { products } from '../../utils/productsTest';
import CardProduct from '../Cards/CardProduct';

const MyGrid = () => {
  const [rows, setRows] = useState([]);
  const columns = 2;

  const calculateColumns = () => {
    const newRows = [];
    for (let i = 0; i < products.length; i += columns) {
      const row = products.slice(i, i + columns);

      if (row.length < columns) {
        while (row.length < columns) {
          row.push(null);
        }
      }
      newRows.push(row);
    }
    setRows(newRows);
  };

  useEffect(() => {
    if (products?.length > 0) {
      calculateColumns();
    }
  }, []);

  return (
    <ScrollViewCustom>
      <View style={styles.container}>
        {rows.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((product, colIndex) => (
              <View style={styles.column} key={colIndex}>
                {product ? (
                  <CardProduct product={product} />
                ) : null}
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollViewCustom>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    margin: 5,
    borderRadius: 10,
  },
  item: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.light,
    padding: 10,
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    backgroundColor: Colors.error,
  },
  emptyText: {
    color: '#bbb',
  },
});

export default MyGrid;
