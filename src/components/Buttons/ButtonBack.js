import { StyleSheet } from "react-native";
import { Button } from "react-native-paper"
import { Colors } from "../../styles/globals";


const ButtonBack = (props) => {
  const { navigation, route, title } = props;

  return (
    <Button
      icon="arrow-left"
      mode="text"
      onPress={() => navigation.navigate(route)}
      style={{ ...styles.button }}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 'auto',
    marginVertical: 10,
    alignItems: 'flex-start',
  },
});

export default ButtonBack;

