import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../features/Home/HomeScreen';

type HomeStackParamList = {
  [HomeStacks.Home]: undefined
}

enum HomeStacks {
  Home = 'HomeScreen'
}

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={HomeStacks.Home} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
