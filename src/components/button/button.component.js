import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './button.style';
const ButtonCustom = ({size, title, action}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={[styles.buttonWrap, size === 'sm' ? styles.buttonSmall : null]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
