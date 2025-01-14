

import React from 'react';
import { Colors } from "../styles/globals";
import Toast, { BaseToast } from 'react-native-toast-message';

const ForwardRefToast = React.forwardRef((props, ref) => {
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: Colors.primary }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      />
    ),
    error: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'red' }}
        text1Style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      />
    ),
  };
  return (
    <Toast ref={ref} {...props} config={toastConfig} />
  );
});

export default ForwardRefToast;