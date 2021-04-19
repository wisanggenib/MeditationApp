import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {HomePage, WelcomePage, Menu, MainMenu} from '../containers/';
import BottomTabNavigator from './tabsNavigation';

// Creating Stack Navigator
const Stack = createStackNavigator();

//Stack Before Login
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="welcome" component={WelcomePage} />
    </Stack.Navigator>
  );
};

//stack After Login
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="menu" component={Menu} />
      <Stack.Screen name="mainMenu" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

//Navigator That Called in App.js
const AppNavigator = () => {
  const loginStatus = useSelector(state => {
    return state.Auth.isLogin;
  });

  return (
    <NavigationContainer>
      {loginStatus ? <MainStack loginStatus={loginStatus} /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
