/* eslint-disable no-shadow */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {login} from '../../features/actions';
import {connect} from 'react-redux';

class WelcomePage extends React.Component {
  render() {
    const {isLogin, login} = this.props;
    return (
      <View>
        <Text>This is welcome Pagess{JSON.stringify(isLogin)}</Text>
        <Button title="Login" onPress={() => login()} />
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
