import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import Home from '../screens/home';
import Favorites from '../screens/favorites';
import Basket from '../screens/basket';
import Settings from '../screens/settings';
import {Heart, Home2, Setting2, ShoppingBag} from 'iconsax-react-native';
import {selectTotalItems} from '../redux/slice/basketSlice'; // Yeni selector'ü import ettik

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const itemCount = useSelector(selectTotalItems); // Sepetteki toplam ürün sayısını çekiyoruz

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <Home2
              size="32"
              color="#555555"
              variant={focused ? 'Bold' : 'Outline'}
            />
          ),
          tabBarLabel: () => null,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Heart
              size="32"
              color="#555555"
              variant={focused ? 'Bold' : 'Outline'}
            />
          ),
          tabBarLabel: () => null,
        }}
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{position: 'relative'}}>
              <ShoppingBag
                size="32"
                color="#555555"
                variant={focused ? 'Bold' : 'Outline'}
              />
              {itemCount > 0 && (
                <View
                  style={{
                    position: 'absolute',
                    top: -5,
                    right: -5,
                    backgroundColor: 'red',
                    borderRadius: 10,
                    width: 18,
                    height: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
                    {itemCount}
                  </Text>
                </View>
              )}
            </View>
          ),
          tabBarLabel: () => null,
        }}
        name="Basket"
        component={Basket}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Setting2
              size="32"
              color="#555555"
              variant={focused ? 'Bold' : 'Outline'}
            />
          ),
          tabBarLabel: () => null,
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
