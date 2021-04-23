import {StyleSheet} from 'react-native';

// import {Spacing, Colors, Fonts} from '../../styles';

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
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    marginBottom: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 0.7,
    paddingTop: 3,
  },
  btnLogin: {
    marginTop: 30,
    width: '100%',
  },
  orText: {
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  btnOther: {
    width: '45%',
    padding: 15,
  },
});
