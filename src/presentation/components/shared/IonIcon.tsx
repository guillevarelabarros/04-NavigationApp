import React from 'react';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import type { ComponentProps } from 'react';

type IonIconProps = ComponentProps<typeof Ionicons>;

export const IonIcon = (props: IonIconProps) => {
  return <Ionicons {...props} />;
};
