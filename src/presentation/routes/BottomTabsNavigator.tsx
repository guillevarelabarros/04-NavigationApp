import React from 'react';
import type { ComponentProps } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';
import { globalColors } from '../theme/theme';

export type BottomTabParams = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};

type IconName = ComponentProps<typeof IonIcon>['name'];

const tabIcon = (active: IconName, inactive: IconName) =>
  ({ color, size, focused }: { color: string; size: number; focused: boolean }) => (
    <IonIcon name={focused ? active : inactive} size={size} color={color} />
  );

const Tab = createBottomTabNavigator<BottomTabParams>();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerLeft: () => <HamburgerMenu />,
        tabBarShowLabel: false,
        tabBarActiveTintColor: globalColors.primary,
        tabBarInactiveTintColor: 'rgba(0,0,0,0.4)',
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{ title: 'Tab 1', tabBarIcon: tabIcon('rocket', 'rocket-outline') }}
      />
      <Tab.Screen
        name="Tab2"
        component={TopTabsNavigator}
        options={{ title: 'Top Tabs', headerShown: false, tabBarIcon: tabIcon('layers', 'layers-outline') }}
      />
      <Tab.Screen
        name="Tab3"
        component={StackNavigator}
        options={{ title: 'Home', headerShown: false, tabBarIcon: tabIcon('home', 'home-outline') }}
      />
    </Tab.Navigator>
  );
};
