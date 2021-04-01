import {AppsNavigator} from './src/navigation/index';
import {Provider} from 'react-redux';
import React from 'react';
import store from './src/features';
import {Text, View} from 'react-native';

const App = props => (
  <Provider store={store}>
    <AppsNavigator {...props} />
    <View>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  </Provider>
);
export default App;
