import React from 'react';
import { View, Text, Button } from 'react-native';

const ChangeInfo = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>ChangeInfo component</Text>
      <Button
        title="Go back to main"
        onPress={() => navigation.navigate('Main', { name: 'Main' })}
      />
    </View>
  );
};

export default ChangeInfo;
