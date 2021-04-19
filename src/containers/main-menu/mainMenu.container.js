import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import {Header, Card, ButtonCustom} from '../../components/';
import styles from './mainMenu.style';
import {Images} from '../../../assets/';

class MainMenu extends React.Component {
  state = {
    data: 'Gusgus',
    listData: [
      {id: 1, title: 'Focus', pict: Images.recom1},
      {id: 2, title: 'Happines', pict: Images.recom2},
      {id: 3, title: 'Relaxing', pict: Images.recom1},
      {id: 4, title: 'Relaxing', pict: Images.recom2},
      {id: 5, title: 'Relaxing', pict: Images.recom1},
      {id: 6, title: 'Relaxing', pict: Images.recom2},
      {id: 7, title: 'Relaxing', pict: Images.recom1},
      {id: 8, title: 'Relaxing', pict: Images.recom2},
      {id: 9, title: 'Relaxing', pict: Images.recom1},
    ],
  };

  _renderGreeting = () => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{marginBottom: 20}}>
        <Text style={styles.title}>Good Morning, {this.state.data}</Text>
        <Text style={styles.subTitle}>We Wish you have a good day</Text>
      </View>
    );
  };
  _renderTopMenu = () => {
    return (
      <View style={styles.menu}>
        <Card images={Images.menu1} myColor="#8E97FD">
          <Text style={styles.font18}>Basic</Text>
          <Text style={styles.font12}>Course</Text>
          <View style={styles.cardContent}>
            <Text style={styles.font12}>3-10 Min</Text>
            <ButtonCustom
              styleCustom={styles.buttonCustom}
              title="START"
              bgColor="#EBEAEC"
              fontColor="#3F414E"
            />
          </View>
        </Card>
        <Card images={Images.menu2} myColor="#FFC97E">
          <Text style={styles.font18}>Relaxation</Text>
          <Text style={styles.font12}>Music</Text>
          <View style={styles.cardContent}>
            <Text style={styles.font12}>3-10 Min</Text>
            <ButtonCustom
              styleCustom={styles.buttonCustom}
              title="START"
              bgColor="#3F414E"
            />
          </View>
        </Card>
      </View>
    );
  };

  _renderMidMenu = () => {
    return (
      <ImageBackground
        source={Images.bgMenu}
        // eslint-disable-next-line react-native/no-inline-styles
        imageStyle={{borderRadius: 20}}
        style={styles.midMenu}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
          }}>
          <Text style={[styles.font18, styles.fontWhite]}>Daily Thought</Text>
          <Text style={[styles.font12, styles.fontWhite]}>
            Meditation 5-10 Min
          </Text>
        </View>
        <View style={styles.btnStart}>
          <Image source={Images.btnMenu} />
        </View>
      </ImageBackground>
    );
  };

  _renderItem = ({item}) => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{marginRight: 10}}>
        <Image source={item.pict} />
        <Text style={[styles.font18]}>{item.title}</Text>
        <Text style={[styles.font12]}>Meditation 5-10 Min</Text>
      </View>
    );
  };
  _renderRecomended = () => {
    return (
      <View>
        <FlatList
          data={this.state.listData}
          renderItem={this._renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          marginBottom={20}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          {this._renderGreeting()}
          {this._renderTopMenu()}
          {this._renderMidMenu()}
          <Text style={styles.recomended}>Recomended For You</Text>
          {this._renderRecomended()}
        </ScrollView>
      </View>
    );
  }
}

export default MainMenu;
