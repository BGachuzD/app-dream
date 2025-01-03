import { Text, StyleSheet, View } from 'react-native';
import { Colors, TextStyles } from '../../styles/globals';

const TextView = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={TextStyles}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

export default TextView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  line: {
    height: 2,
    width: '100%',
    birderRadius: 1,
    backgroundColor: Colors.blue,
  },
});
