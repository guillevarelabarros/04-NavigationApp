
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IonIcon } from '../../components/shared/IonIcon';
import { globalColors } from '../../theme/theme';

export const Tab1Screen = () => {
  return (
    <View style={styles.container}>
      <IonIcon name="rocket-outline" size={80} color={globalColors.primary} />
      <Text style={styles.text}>Tab1Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.background,
  },
  text: {
    marginTop: 12,
    fontSize: 18,
    color: globalColors.dark,
  },
});