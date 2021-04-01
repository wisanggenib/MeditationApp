import React from 'react';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {WelcomePage} from '../containers/welcome-page/index';
import {HomePage} from '../containers/home-page/index';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const loginStatus = useSelector(state => {
    return state.Auth.isLogin;
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loginStatus ? (
          <Stack.Screen name="home" component={HomePage} />
        ) : (
          <Stack.Screen name="welcome" component={WelcomePage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
