/* eslint-disable no-shadow */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {logout} from '../../features/actions';
import {connect} from 'react-redux';

class Homepage extends React.Component {
  render() {
    const {isLogin, logout} = this.props;
    return (
      <View>
        <Text>This is Home Pages{JSON.stringify(isLogin)}</Text>
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
