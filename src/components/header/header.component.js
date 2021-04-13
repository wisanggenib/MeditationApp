import React from 'react';
import {View, Text, Image} from 'react-native';
import {Images} from '../../../assets/';

import styles from './header.style';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Images.logo} />
    </View>
  );
};

export default Header;
