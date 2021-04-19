import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../style';
import colors from '../../style/colors';
export default StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  menu: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: Fonts.xlarge,
  },
  subTitle: {
    color: Colors.gray,
    fontSize: Fonts.medium,
  },
  cardContent: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCustom: {
    padding: 10,
    width: 'auto',
    paddingHorizontal: 20,
  },
  font12: {
    fontSize: Fonts.normal,
  },
  font18: {
    fontWeight: 'bold',
    fontSize: Fonts.medium,
  },
  fontWhite: {
    color: colors.white,
  },
  btnStart: {
    flex: 1,
    alignItems: 'flex-end',
  },
  midMenu: {
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 35,
    backgroundColor: '#333242',
    justifyContent: 'space-between',
  },
  recomended: {
    fontWeight: 'bold',
    paddingBottom: 15,
    fontSize: Fonts.xlarge,
  },
});
