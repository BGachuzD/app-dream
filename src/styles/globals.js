import Constants from 'expo-constants';

export const Colors = {
  primary: '#b07b6f',
  secondary: '#6c757d',
  pink: '#caa5c0',
  brown: '#b07b6f',
  grey: '#d4d8cf',
  blue: '#89b5bf',
  strongGrey: '#576669',
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  card: '#f0f0f0',
  dark: '#343a40',
  white: '#ffffff',
  black: '#000000',
};

export const ContainerStyles = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: Colors.white,
  //paddingTop: Constants.statusBarHeight + 10,
  paddingTop: 20,
  paddingHorizontal: 20,
};

export const TitleViewStyles = {
  color: Colors.primary,
  fontSize: 26,
  fontWeight: 'bold',
  marginBottom: 10,
};

export const TextStyles = {
  color: Colors.blue,
  fontSize: 18,
  textAlign: 'center',
  marginHorizontal: 10,
  lineHeight: 20,
};
