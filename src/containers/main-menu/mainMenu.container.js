import React from 'react';
import {View, Text} from 'react-native';
import {Header, Card} from '../../components/';

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
