import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'yellow',
    borderRadius: 15,
    width: width * 0.44,
  },
});
