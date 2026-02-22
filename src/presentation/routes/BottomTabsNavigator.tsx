import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

export type BottomTabParams = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParams>();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => <HamburgerMenu />,
        tabBarActiveTintColor: '#7037EB',
        tabBarInactiveTintColor: 'rgba(0,0,0,0.4)',
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen name="Tab1" component={Tab1Screen} options={{ title: 'Tab 1' }} />
      <Tab.Screen name="Tab2" component={TopTabsNavigator} options={{ title: 'Top Tabs', headerShown: false }} />
      <Tab.Screen name="Tab3" component={StackNavigator} options={{ title: 'Stack', headerShown: false }} />
    </Tab.Navigator>
  );
};
