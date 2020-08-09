import React from 'react';
import { View, Text, Button } from 'react-native';

const OrderHistory = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>OrderHistory component</Text>
      <Button
        title="Go back to main"
        onPress={() => navigation.navigate('Main', { name: 'Main' })}
      />
    </View>
  );
};

export default OrderHistory;
