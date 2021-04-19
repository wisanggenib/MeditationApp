import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './button.style';
const ButtonCustom = ({
  size,
  title,
  action,
  styleCustom,
  bgColor,
  fontColor,
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[
        styles.buttonWrap,
        size === 'sm' ? styles.buttonSmall : null,
        styleCustom,
        bgColor ? {backgroundColor: bgColor} : null,
      ]}>
      <Text style={[styles.text, fontColor ? {color: fontColor} : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
