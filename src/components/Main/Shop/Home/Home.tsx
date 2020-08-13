import React from 'react';
import { ScrollView } from 'react-native';
import Collection from './Collection';
import Categories from './Categories';
import TopProduct from './TopProduct';

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#DBDBDB' }}>
      <Collection />
      <Categories />
      <TopProduct />
    </ScrollView>
  );
};

export default Home;
