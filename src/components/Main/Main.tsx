import React from 'react';
import Proptypes from 'prop-types';

import Shop from './Shop/Index';
import Menu from './Menu';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: 200,
      }}
      drawerContent={() => <Menu />}
      initialRouteName="Shop"
    >
      <Drawer.Screen name="Shop" component={Shop} />
    </Drawer.Navigator>
  );
};

export default Main;

Main.propTypes = {
  navigation: Proptypes.objectOf(Proptypes.any),
};
