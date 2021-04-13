import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {HomePage, WelcomePage, Menu, MainMenu} from '../containers/';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const loginStatus = useSelector(state => {
    return state.Auth.isLogin;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {loginStatus ? (
          <>
            <Stack.Screen name="home" component={HomePage} />
            <Stack.Screen name="menu" component={Menu} />
            <Stack.Screen name="mainMenu" component={MainMenu} />
          </>
        ) : (
          <Stack.Screen name="welcome" component={WelcomePage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
