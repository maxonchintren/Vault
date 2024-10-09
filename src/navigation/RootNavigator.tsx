import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeNavigator } from './HomeNavigator';

type RootStackParamList = {
  [RootStacks.Home]: undefined
}

enum RootStacks {
  Home = 'HomeStack'
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={RootStacks.Home} component={HomeNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
