import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnlineTutorialsScreen} from '../screens/OnlineTutorialsScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {VideoTutorialsScreen} from '../screens/VideoTutorialsScreen';
import {DiscoverTutorialsScreen} from '../screens/DiscoverTutorialsScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home-screen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen
        name="onlineTutorials-screen"
        component={OnlineTutorialsScreen}
      />
      <Stack.Screen
        name="videoTutorials-screen"
        component={VideoTutorialsScreen}
      />
      <Stack.Screen
        name="discoverTutorials-screen"
        component={DiscoverTutorialsScreen}
      />
    </Stack.Navigator>
  );
};
