import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../features/actions';
import {View, Text, ImageBackground} from 'react-native';
import {Images} from '../../../assets';
import {ButtonCustom} from '../../components';
import Styles from './profile.style';

class Profile extends React.Component {
  state = {
    data: null,
  };

  render() {
    const {logout} = this.props;

    return (
      <ImageBackground source={Images.bgProfile} style={Styles.wrapper}>
        <View style={Styles.topContainer}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
            }}>
            <Text style={Styles.title}>Hello, </Text>
            <Text style={Styles.name}>Yourname</Text>
          </View>
          <Text style={Styles.detail}>
            Thank your for using this app, i hoope you enjoy every moment that
            you spent with us
          </Text>
        </View>
        <View style={Styles.bottomContainer}>
          <ButtonCustom
            title="Logout"
            fontColor="#8C96FF"
            bgColor={'white'}
            action={() => logout()}
          />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.Auth.isLogin,
  };
};

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
