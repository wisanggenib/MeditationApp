import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../style';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperMansory: {
    flex: 1,
  },
  mainTitle: {
    fontSize: Fonts.xxlarge,
  },
  bold: {
    fontWeight: 'bold',
  },
  desc: {
    fontSize: Fonts.large,
    color: Colors.gray,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  contentWrapper: {
    backgroundColor: 'aqua',
    flexDirection: 'column',
  },
  listContent: {
    width: width * 0.4,
    backgroundColor: 'red',
    marginBottom: width * 0.03,
  },
  button: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonPress: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'red',
  },
});
