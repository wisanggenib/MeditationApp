import React from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './mansory.style';
const Mansory = ({datas, padding, customStyle}) => {
  const left = datas.filter(item => item.id % 2 === 0);
  const right = datas.filter(item => item.id % 2 !== 0);
  return (
    <View style={[Styles.wrapper, customStyle]}>
      <View>
        {left.map(item => (
          <Image
            key={item.id}
            source={item.source}
            style={[
              Styles.paddingItem,
              padding ? {marginBottom: padding} : null,
            ]}
          />
        ))}
      </View>
      <View>
        {right.map(item => (
          <Image
            key={item.id}
            source={item.source}
            style={[
              Styles.paddingItem,
              padding ? {marginBottom: padding} : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Mansory;
