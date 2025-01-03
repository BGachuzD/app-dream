import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { formatPricing } from "../../utils/formatPricing";
import { Colors } from "../../styles/globals";

const CardProduct = ({ product }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: product.image }} style={styles.img} />
      <View style={styles.container}>
        <Text style={styles.textName}>{product.name}</Text>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <MaterialIcons name="attach-money" size={18} color={Colors.primary} />
            <Text style={styles.textSecundary}>{formatPricing(product.price)}</Text>
          </View>
          <View style={styles.row}>
            <MaterialIcons name="inventory" size={20} color={Colors.primary} />
            <Text style={styles.textSecundary}>{product.stock}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="add-shopping-cart" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%',
    height: '100%',
    shadowColor: Colors.black,
    backgroundColor: Colors.card,
    borderRadius: 15,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textName: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textSecundary: {
    color: Colors.primary,
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 90,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: Colors.error,
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.blue,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

