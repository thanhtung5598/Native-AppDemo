import React from 'react';
import { View } from 'react-native';
import Collection from './Collection';
import Categories from './Categories';

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#DBDBDB' }}>
      <Collection />
      <Categories />
    </View>
  );
};

export default Home;
