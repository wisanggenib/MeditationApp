/* eslint-disable no-shadow */
import React from 'react';
import {connect} from 'react-redux';
import styles from './homepage.style';

import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {ButtonCustom} from '../../components';
import {logout} from '../../features/actions';
import {Images} from '../../../assets';

const renderHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={Images.logo} />
    </View>
  );
};

class Homepage extends React.Component {
  render() {
    const {isLogin, logout, navigation} = this.props;
    return (
      <View style={styles.wrapper}>
        {renderHeader()}
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
