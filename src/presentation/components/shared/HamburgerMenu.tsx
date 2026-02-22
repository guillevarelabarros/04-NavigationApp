import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { globalColors } from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  const openMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Pressable onPress={openMenu} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
      <View style={styles.bar} />
      <View style={styles.bar} />
      <View style={styles.bar} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    gap: 5,
  },
  pressed: {
    opacity: 0.5,
  },
  bar: {
    width: 22,
    height: 2,
    backgroundColor: globalColors.dark,
    borderRadius: 2,
  },
});
