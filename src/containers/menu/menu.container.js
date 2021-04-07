import React from 'react';
import {View, Text} from 'react-native';

class Menu extends React.Component {
  render() {
    const text = 'Menu';
    return (
      <View>
        <Text> This is {text} Page</Text>
      </View>
    );
  }
}

export default Menu;
