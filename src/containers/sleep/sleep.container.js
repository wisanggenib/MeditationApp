/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import Styles from './sleep.style';
import {Images} from '../../../assets/';

class Sleep extends React.Component {
  state = {
    data: [
      {id: 0, title: 'All', img: Images.iconAll},
      {id: 1, title: 'My', img: Images.iconLove},
      {id: 2, title: 'Anxious', img: Images.iconSad},
      {id: 3, title: 'Sleep', img: Images.iconMoon},
      {id: 4, title: 'Kids', img: Images.iconChild},
    ],

    menuData: [
      {
        id: 0,
        title: 'Night Island',
        desc: ' 45 Min - Sleep Music',
        img: Images.menuSleep,
      },
      {
        id: 1,
        title: 'Sweet Sleep',
        desc: ' 45 Min - Sleep Music',
        img: Images.menuSleep1,
      },
      {
        id: 2,
        title: 'Sleeping Beauty',
        desc: ' 45 Min - Sleep Music',
        img: Images.menuSleep2,
      },
      {
        id: 3,
        title: 'Dream Island',
        desc: ' 45 Min - Sleep Music',
        img: Images.menuSleep3,
      },
    ],
  };

  _renderItem = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
        <Text style={{padding: 5, fontSize: 16, color: 'white'}}>
          {item.title}
        </Text>
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
      />
    );
  };

  _renderMiddle = () => {
    return (
      <ImageBackground
        source={Images.bgSleep}
        style={Styles.midBG}
        imageStyle={Styles.midIMG}>
        <Text style={{fontSize: 30, color: '#FFE7BF'}}>The Ocean Moon</Text>
        <Text style={Styles.midContent}>
          Non-stop 8- hour mixes of our most popular sleep audio
        </Text>
      </ImageBackground>
    );
  };

  _renderMenus = () => {
    return (
      <View style={{flexWrap: 'wrap', flexDirection: 'row', margin: 10}}>
        {this.state.menuData.map(item => (
          <View style={{width: '50%', padding: 10}} key={item.id}>
            <ImageBackground
              style={{
                height: 122,
              }}
              imageStyle={{
                resizeMode: 'cover',
                borderRadius: 10,
              }}
              source={item.img}
            />
            <View style={{padding: 5}}>
              <Text style={Styles.titleMenu}>{item.title}</Text>
              <Text style={Styles.descMenu}>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={Images.backgroundSleep}
        imageStyle={{flex: 1, resizeMode: 'cover'}}
        style={{flex: 1}}>
        <ScrollView>
          <Text style={Styles.title}>Sleep Stories</Text>
          <Text style={Styles.subTitle}>
            Soothing bedtime stories to help you fall into a deep and natural
            sleep
          </Text>
          {this._renderMenu()}
          {this._renderMiddle()}
          {this._renderMenus()}
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Sleep;
