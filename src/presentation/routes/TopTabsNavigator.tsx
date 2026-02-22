import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { globalColors } from '../theme/theme';

export type TopTabParams = {
  Profile: undefined;
  About: undefined;
};

const TopTab = createMaterialTopTabNavigator<TopTabParams>();

export const TopTabsNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{ paddingTop: top }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        tabBarInactiveTintColor: 'rgba(0,0,0,0.4)',
        tabBarIndicatorStyle: {
          backgroundColor: globalColors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}>
      <TopTab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <TopTab.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
    </TopTab.Navigator>
  );
};
