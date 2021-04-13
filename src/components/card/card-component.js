import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './card-style';
//import {Images} from '../../../assets/';

const Card = ({images, children}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={{alignSelf: 'flex-end', borderTopRightRadius: 15}}
        source={images}
      />
      <View style={{padding: 15, paddingTop: 0}}>{children}</View>
    </View>
  );
};

export default Card;
