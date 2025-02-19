//import liraries
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import ProductDetail from '../screens/product/ProductDetail';
import Login from '../screens/login/Login';
const Stack = createNativeStackNavigator();
// create a component
const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}}
        name="Tab"
        component={TabNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProductDetail"
        component={ProductDetail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackNavigation;
