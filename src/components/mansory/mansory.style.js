import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  paddingItem: {
    marginBottom: 10,
    width: width * 0.44,
    resizeMode: 'stretch',
  },
  contentWrap: {
    padding: 10,
  },
});
