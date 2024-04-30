import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './HomeStack';

export const AppStack = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};
