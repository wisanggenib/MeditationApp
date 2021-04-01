/* eslint-disable no-shadow */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {login} from '../../features/actions';
import {connect} from 'react-redux';

class Homepage extends React.Component {
  render() {
    console.log(this.props.login);
    const {isLogin, login} = this.props;
    return (
      <View>
        <Text>This is Home Pages{JSON.stringify(isLogin)}</Text>
        <Button title="go to" onPress={() => login()} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
