import {StyleSheet} from 'react-native';

import {Fonts} from '../../style';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  formWrapper: {
    flex: 2,
    paddingHorizontal: '14%',
  },
  formTitle: {
    fontSize: Fonts.medium,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    paddingTop: 3,
    marginBottom: 15,
    borderBottomWidth: 0.7,
    borderBottomColor: 'white',
  },
  btnLogin: {
    width: '100%',
    marginTop: 30,
  },
  orText: {
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'center',
  },
  btnContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnOther: {
    padding: 15,
    width: '45%',
  },
});
