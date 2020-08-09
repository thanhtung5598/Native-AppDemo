import React from 'react';
import { View, Button, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Search from './Search/Search';

const Tab = createBottomTabNavigator();
const windowWidth = Dimensions.get('window').width;

const Index = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: windowWidth / 6,
          backgroundColor: '#f4511e',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button title="Open" onPress={() => navigation.openDrawer()} />
      </View>
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
  color: PropTypes.string,
};
