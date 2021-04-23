/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './midMenu.style';

const MidMenu = ({
  customStyle,
  background,
  title,
  detail,
  buttonImages,
  white,
}) => {
  return (
    <ImageBackground
      source={background}
      imageStyle={{borderRadius: 15}}
      style={[styles.wrapper, customStyle]}>
      <View style={styles.content}>
        <Text style={[styles.title, white ? {color: 'white'} : null]}>
          {title}
        </Text>
        <Text style={[styles.detail, white ? {color: 'white'} : null]}>
          {detail}
        </Text>
      </View>
      <TouchableOpacity style={[styles.content, styles.flexEnd]}>
        <Image source={buttonImages} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default MidMenu;
