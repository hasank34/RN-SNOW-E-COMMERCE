//import liraries
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/router/StackNavigation';
import store from './src/redux/store';
// create a component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

//make this component available to the app
export default App;
