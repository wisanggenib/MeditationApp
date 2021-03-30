import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {WelcomePage} from '../containers/welcome-page/index';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
