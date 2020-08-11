import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from './header';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';

const Tab = createBottomTabNavigator();

const Index = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color }) => (
              <AntDesign name="shoppingcart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Index;

Index.propTypes = {
  color: PropTypes.objectOf(PropTypes.any),
};
