import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './menu.style';

const _renderHeader = () => {
  return (
    <View>
      <Text style={[styles.mainTitle, styles.bold]}>What Brings You</Text>
      <Text style={[styles.mainTitle]}>to Silent Moon ?</Text>
      <Text style={styles.desc}>choose a topic to focuse on:</Text>
    </View>
  );
};

const _renderContent = () => {
  return (
    <View style={styles.content}>
      <View style={styles.contentWrapper}>
        <View style={styles.listContent}>
          <Text>This is Content</Text>
        </View>
        <View style={styles.listContent}>
          <Text>This is Content</Text>
        </View>
        <View style={styles.listContent}>
          <Text>This is Content</Text>
        </View>
        <View style={[styles.listContent]}>
          <Text>This is Content</Text>
        </View>
        <View style={styles.listContent}>
          <Text>This is Content</Text>
        </View>
      </View>
    </View>
  );
};

const _renderMiddle = () => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>This is Mid</Text>
    </View>
  );
};
class Menu extends React.Component {
  render() {
    const text = 'Menu';
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {_renderHeader()}
          {_renderContent()}
          {_renderMiddle()}
        </ScrollView>
      </View>
    );
  }
}

export default Menu;
