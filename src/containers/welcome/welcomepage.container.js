/* eslint-disable no-shadow */
import React from 'react';

import {ImageBackground, Text, TextInput, View} from 'react-native';
import {Header, ButtonCustom} from '../../components';
import {login} from '../../features/actions';
import Styles from './welcomepage.style';
import {Images} from '../../../assets';
import {connect} from 'react-redux';
import {Colors} from '../../style';

class WelcomePage extends React.Component {
  render() {
    const {login} = this.props;
    return (
      <View style={Styles.wrapper}>
        <ImageBackground source={Images.welcome} style={Styles.wrapper}>
          <View style={Styles.headerWrapper}>
            <Header />
          </View>
          <View style={Styles.formWrapper}>
            <Text style={Styles.formTitle}>Username</Text>
            <TextInput style={Styles.input} />
            <Text style={Styles.formTitle}>Password</Text>
            <TextInput style={Styles.input} />
            <ButtonCustom
              title="Login"
              fontColor={Colors.mainPurple}
              bgColor="white"
              styleCustom={Styles.btnLogin}
              action={() => login()}
            />
            <Text style={Styles.orText}>OR</Text>
            <View style={Styles.btnContainer}>
              <ButtonCustom
                title="Facebook"
                bgColor={Colors.mainPurple}
                styleCustom={Styles.btnOther}
              />
              <ButtonCustom
                title="Google"
                bgColor={Colors.mainPurple}
                styleCustom={Styles.btnOther}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    isLogin: state.Auth.isLogin,
  };
};

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
