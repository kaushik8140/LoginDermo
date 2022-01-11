import React, {Component, useEffect} from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Screen/OnboardingScreen';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
