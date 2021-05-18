import {StyleSheet} from 'react-native';
import {Fonts} from '../../style';
export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: Fonts.xlarge,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subTitle: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 50,
    fontSize: Fonts.normal,
  },
  midBG: {
    flex: 1,
    minHeight: 250,
    maxHeight: 350,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midIMG: {
    flex: 1,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  midContent: {
    fontSize: 14,
    color: '#F9F9FF',
    textAlign: 'center',
    paddingHorizontal: 80,
  },
  titleMenu: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descMenu: {
    color: '#98A1BD',
  },
});
