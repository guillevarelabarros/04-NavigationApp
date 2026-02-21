
import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ProfileScreen = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: top, paddingBottom: bottom, paddingLeft: left, paddingRight: right }}>
      <Text>ProfileScreen</Text>
    </View>
  );
};