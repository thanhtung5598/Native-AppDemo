import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import Authentication from './src/components/Authentication/Authentication';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
import Main from './src/components/Main/Main';
import OrderHistory from './src/components/OrderHistory/OrderHistory';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
StatusBar.setHidden(true);

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main',
          }}
        />
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{ title: 'Authentication' }}
        />
        <Stack.Screen
          name="ChangeInfo"
          component={ChangeInfo}
          options={{ title: 'ChangeInfo' }}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{ title: 'OrderHistory' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
