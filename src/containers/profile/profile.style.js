import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'red',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detail: {
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingTop: 10,
    color: 'white',
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  bottomContainer: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
});
