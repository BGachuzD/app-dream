import { View, Text, StyleSheet } from "react-native";
import { TitleViewStyles } from "../../styles/globals";

/* 
  {
    "id": 1,
    "name": "Product 1",
    "description": "Description of product 1",
    "price": 100,
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "category": "Category 1"
    "stock": 10
  }
*/

const CardProduct = ({ product }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.tittleText}>{product.title}</Text>
      <Text style={styles.infoText}>{product.description}</Text>
    </View>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
  tittleText: TitleViewStyles,
  infoText: {
    color: '#fff',
    fontSize: 16,
  },
});
