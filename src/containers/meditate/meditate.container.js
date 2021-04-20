/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Images} from '../../../assets';
import {MidMenu, Mansory} from '../../components';
import styles from './meditate.style';
import dataMenu from './data';

class Meditate extends React.Component {
  state = {
    data: [
      {id: 0, title: 'All', img: Images.iconAll},
      {id: 1, title: 'My', img: Images.iconLove},
      {id: 2, title: 'Anxious', img: Images.iconSad},
      {id: 3, title: 'Sleep', img: Images.iconMoon},
      {id: 4, title: 'Kids', img: Images.iconChild},
    ],
    myData: [1],
  };

  _renderTitle = () => {
    return (
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Meditation</Text>
        <Text style={styles.detail}>
          we can learn how to recognize when our minds are doing their normal
          everyday acrobatics.
        </Text>
      </View>
    );
  };

  _renderItem = ({item}) => {
    return (
      <View
        style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            width: 65,
            height: 65,
            justifyContent: 'center',
            backgroundColor: '#8E97FD',
            alignItems: 'center',
            borderRadius: 25,
          }}>
          <Image source={item.img} />
        </TouchableOpacity>
        <Text style={{padding: 5, fontSize: 16}}>{item.title}</Text>
      </View>
    );
  };

  _renderMenu = () => {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this._renderItem}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{maxHeight: 100}}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          {this._renderTitle()}
          {this._renderMenu()}
          <View style={{height: 100, marginBottom: 13}}>
            <MidMenu
              title="Daily Calm"
              detail="April 30 - Pause Practice"
              buttonImages={Images.btnMenu}
              background={Images.bgMeditate}
              customStyle={{
                backgroundColor: '#F1DDCF',
              }}
            />
          </View>
          <Mansory datas={dataMenu} disable={true} />
        </View>
      </ScrollView>
    );
  }
}

export default Meditate;
