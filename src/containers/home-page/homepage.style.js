const {width, height} = Dimensions.get('window');
import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../style';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  bgImage: {
    width: width * 1,
    // resizeMode: 'cover',
    height: height * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: Fonts.xxxlarge,
  },
  subTitle: {
    paddingBottom: 10,
    color: Colors.gray,
    textAlign: 'center',
    fontSize: Fonts.normal,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
