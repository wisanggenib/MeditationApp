import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../style';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FEFFFE',
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: Fonts.xlarge,
  },
  detail: {
    fontSize: Fonts.medium,
    textAlign: 'center',
    color: Colors.gray,
  },
});
