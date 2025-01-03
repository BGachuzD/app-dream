import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function ScrollViewCustom({ children }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false} // Oculta la barra vertical
      showsHorizontalScrollIndicator={false} // (Opcional) Oculta la barra horizontal
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
});
