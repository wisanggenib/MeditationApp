/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight, Button, ScrollView} from 'react-native';
import styles from './menu.style';
import dataMenu from './data';
import MasonryList from 'react-native-masonry-list';
import {Mansory} from '../../components/';

const _renderHeader = () => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text style={[styles.mainTitle, styles.bold]}>What Brings You</Text>
      <Text style={[styles.mainTitle]}>to Silent Moon ?</Text>
      <Text style={styles.desc}>choose a topic to focuse on:</Text>
    </View>
  );
};

class Menu extends React.Component {
  _buttonAction = () => {
    console.log('Hello');
    this.props.navigation.navigate('mainMenu');
  };

  render() {
    return (
      <View style={styles.wrapper}>
        {_renderHeader()}
        <View style={styles.wrapperMansory}>
          <ScrollView style={{paddingHorizontal: 20}}>
            <Mansory
              datas={dataMenu}
              padding={10}
              action={() => this._buttonAction()}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Menu;
