/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Menu, MainMenu, Meditate, Sleep, Profile} from '../containers/';
import {Images} from '../../assets/';

//create Tab
const Tab = createBottomTabNavigator();

//Define Props and Styling Navigation
const MyTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const Icon = [
    Images.iconHome,
    Images.iconSleep,
    Images.iconMeditate,
    Images.iconMusic,
    Images.iconPerson,
  ];

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,
          paddingTop: 10,
        },
        state.index === 1
          ? {backgroundColor: '#03174D', borderTopWidth: 0}
          : {backgroundColor: 'white'},
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : null}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: isFocused
                    ? '#8E97FD'
                    : !isFocused && state.index === 1
                    ? '#03174D'
                    : 'white',
                }}>
                <Image source={Icon[index]} />
              </View>
              <Text
                style={{
                  color: isFocused
                    ? '#8E97FD'
                    : !isFocused && state.index === 1
                    ? '#98A1BD'
                    : !isFocused && state.index !== 1
                    ? '#98A1BD'
                    : '#222',
                  fontSize: 14,
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Menu" component={MainMenu} />
      <Tab.Screen name="Sleep" component={Sleep} />
      <Tab.Screen name="Meditate" component={Meditate} />
      <Tab.Screen name="Music" component={Menu} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
