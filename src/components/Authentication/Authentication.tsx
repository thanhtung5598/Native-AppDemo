import React from 'react';
import Proptypes from 'prop-types';
import { View, Text, Button } from 'react-native';

const Authentication = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>Authentication component</Text>
      <Button
        title="Go back to main"
        onPress={() => navigation.navigate('Main', { name: 'Main' })}
      />
    </View>
  );
};

export default Authentication;

Authentication.propTypes = {
  navigation: Proptypes.objectOf(Proptypes.any),
};
