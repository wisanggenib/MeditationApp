import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../style';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
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
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
  },
  contentWrapper: {
    backgroundColor: 'aqua',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
  },
  listContent: {
    width: width * 0.4,
    backgroundColor: 'red',
    height: 100,
    marginVertical: 5,
    marginLeft: 5,
    //    alignSelf: 'center',
    marginRight: 'auto',
  },
});
