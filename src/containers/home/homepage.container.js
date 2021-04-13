/* eslint-disable no-shadow */
import React from 'react';
import {connect} from 'react-redux';
import styles from './homepage.style';

import {Image, Text, View} from 'react-native';
import {ButtonCustom, Header} from '../../components/';
import {logout} from '../../features/actions';
import {Images} from '../../../assets';

class Homepage extends React.Component {
  render() {
    const {isLogin, logout, navigation} = this.props;
    return (
      <View style={styles.wrapper}>
        <Header />
        <View style={styles.content}>
          <Image source={Images.imageWelcome} />
          <Text style={styles.title}>We are what we do</Text>
          <Text style={styles.subTitle}>
            Thousand of people are usign silent moon for smalls meditation
          </Text>
          <ButtonCustom
            title="Let's Start"
            action={() => navigation.navigate('menu')}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    isLogin: state.Auth.isLogin,
  };
};

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
