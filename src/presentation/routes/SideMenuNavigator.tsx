import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { globalColors } from '../theme/theme';
import { CustomDrawerContent } from '../components/shared/CustomDrawerContent';

export type DrawerParams = {
  StackNavigator: undefined;
  Tabs: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParams>();

export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: globalColors.dark,
          width: 260,
        },
        drawerActiveTintColor: globalColors.primary,
        drawerInactiveTintColor: 'rgba(0,0,0,0.6)',
        drawerActiveBackgroundColor: 'rgba(112,55,235,0.1)',
        drawerLabelStyle: {
          fontSize: 15,
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
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="Tabs"
        component={BottomTabsNavigator}
        options={{ title: 'Tabs' }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile', headerShown: true }}
      />
    </Drawer.Navigator>
  );
};
