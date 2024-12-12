import Constants from "expo-constants";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#415A77',  //'#415A77',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 20
  },
  fab: {
    position: 'absolute',
    backgroundColor: '#ebd14f',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
  tittleText: {
    color: '#ebd14f',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#ebd14f',
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  }
});