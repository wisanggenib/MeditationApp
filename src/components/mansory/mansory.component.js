import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './mansory.style';

const Mansory = ({datas, padding, customStyle, action, disable}) => {
  const left = datas.filter(item => item.id % 2 === 0);
  const right = datas.filter(item => item.id % 2 !== 0);
  return (
    <View style={[Styles.wrapper, customStyle]}>
      <View style={Styles.contentWrap}>
        {left.map(item => (
          <TouchableOpacity onPress={action} disabled={disable} key={item.id}>
            <Image
              source={item.source}
              style={[
                Styles.paddingItem,
                padding ? {marginBottom: padding} : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={Styles.contentWrap}>
        {right.map(item => (
          <TouchableOpacity onPress={action} disabled={disable} key={item.id}>
            <Image
              source={item.source}
              style={[
                Styles.paddingItem,
                padding ? {marginBottom: padding} : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Mansory;
