import React from 'react';
import {View, Text} from 'react-native';

class MainMenu extends React.Component {
  state = {
    data: 'hello',
  };
  render() {
    return (
      <View>
        <Text>Main Menu {this.state.data}</Text>
      </View>
    );
  }
}

export default MainMenu;
