import React from 'react';
import {View, Text, TouchableHighlight, Button} from 'react-native';
import styles from './menu.style';
import dataMenu from './data';
import MasonryList from 'react-native-masonry-list';

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
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.wrapper}>
        {_renderHeader()}
        <View style={styles.wrapperMansory}>
          <MasonryList
            rerender={true}
            images={dataMenu}
            spacing={5}
            renderIndividualHeader={data => {
              return (
                <TouchableHighlight
                  style={styles.button}
                  underlayColor={'transparent'}
                  onPress={() => navigation.navigate('mainMenu')}>
                  <View />
                </TouchableHighlight>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default Menu;
