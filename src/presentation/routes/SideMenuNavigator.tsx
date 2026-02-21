import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { globalColors } from '../theme/theme';

export type DrawerParams = {
  StackNavigator: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParams>();

export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: globalColors.dark,
          width: 240,
        },
        drawerActiveTintColor: globalColors.primary,
        drawerInactiveTintColor: 'rgba(255,255,255,0.6)',
        drawerActiveBackgroundColor: 'rgba(112,55,235,0.15)',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
          marginLeft: -10,
        },
        overlayColor: 'rgba(0,0,0,0.5)',
        sceneStyle: {
          backgroundColor: globalColors.background,
        },
      }}>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ title: 'Home', drawerIcon: ({ color }) => null }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile', headerShown: true, drawerIcon: ({ color }) => null }}
      />
    </Drawer.Navigator>
  );
};
