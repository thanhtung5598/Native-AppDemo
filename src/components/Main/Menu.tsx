import React from 'react';
import { View, Button } from 'react-native';

const Menu = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#213052',
      }}
    >
      <Button
        title="Authentication"
        onPress={() => props.navigation.navigate('Authentication', { name: 'Authentication' })}
      />
      <Button
        title="ChangeInfo"
        onPress={() => props.navigation.navigate('ChangeInfo', { name: 'ChangeInfo' })}
      />
      <Button
        title="OrderHistory"
        onPress={() => props.navigation.navigate('OrderHistory', { name: 'OrderHistory' })}
      />
    </View>
  );
};

export default Menu;
