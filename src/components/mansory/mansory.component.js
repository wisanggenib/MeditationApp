import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Styles from './mansory.style';

const Mansory = ({datas, padding, customStyle, action, disable}) => {
  const left = datas.filter(item => item.id % 2 === 0);
  const right = datas.filter(item => item.id % 2 !== 0);
  return (
    <View style={[Styles.wrapper, customStyle]}>
      <View>
        {left.map(item => (
          <TouchableOpacity onPress={action} disabled={disable}>
            <Image
              key={item.id}
              source={item.source}
              style={[
                Styles.paddingItem,
                padding ? {marginBottom: padding} : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {right.map(item => (
          <TouchableOpacity onPress={action} disabled={disable}>
            <Image
              key={item.id}
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
