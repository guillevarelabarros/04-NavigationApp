import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';

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
      <Tab.Screen name="Tab2" component={Tab2Screen} options={{ title: 'Tab 2' }} />
      <Tab.Screen name="Tab3" component={Tab3Screen} options={{ title: 'Tab 3' }} />
    </Tab.Navigator>
  );
};
