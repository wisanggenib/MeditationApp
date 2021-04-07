/* eslint-disable no-shadow */
import React from 'react';
import {connect} from 'react-redux';

import {Button, Image, Text, View} from 'react-native';
import {logout} from '../../features/actions';
import {Images} from '../../../assets';

class Homepage extends React.Component {
  render() {
    const {isLogin, logout} = this.props;
    return (
      <View>
        <Image source={Images.logo} />
        <Text style>This is Home Pages{JSON.stringify(isLogin)}</Text>
        <Button title="Logout" onPress={() => logout()} />
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
