import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
import {Colors} from '../../style';

export default StyleSheet.create({
  buttonWrap: {
    padding: 20,
    width: width * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.purple,
    borderRadius: width * 0.8,
  },
  buttonSmall: {
    width: 'auto',
  },
  text: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
