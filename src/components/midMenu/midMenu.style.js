import {StyleSheet} from 'react-native';
import {Fonts} from '../../style';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: Fonts.medium,
  },
  detail: {
    fontSize: Fonts.normal,
  },
});
