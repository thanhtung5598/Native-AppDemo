import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView
} from 'react-native';

import sp1 from '../../../../images/temp/sp1.jpeg';
import sp2 from '../../../../images/temp/sp2.jpeg';
import sp3 from '../../../../images/temp/sp3.jpeg';
import sp4 from '../../../../images/temp/sp4.jpeg';
import sp5 from '../../../../images/temp/sp5.jpeg';

const { width } = Dimensions.get('window');

const TopProduct = () => {
  const [listItem, setListItem] = useState([
    {
      id: 0,
      img: sp1,
      name: 'Product name',
      price: '$12123123',
    },
    {
      id: 1,
      img: sp2,
      name: 'Product name',
      price: '$1023535',
    },
    {
      id: 2,
      img: sp3,
      name: 'Product name',
      price: '$1023535',
    },
    {
      id: 3,
      img: sp4,
      name: 'Product name',
      price: '$1023535',
    },
    {
      id: 4,
      img: sp5,
      name: 'Product name',
      price: '$1023535',
    }
  ]);
  const renderItem = (itemList: any) => {
    return (
      <View style={styles.productContainer}>
        <Image style={styles.productImg} source={itemList.img} />
        <Text style={styles.productName}>{itemList.name}</Text>
        <Text style={styles.productPrice}>{itemList.price}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TOP PRODUCTS</Text>
      </View>
      <SafeAreaView>
        <FlatList
          scrollEnabled={true}
          data={listItem}
          numColumns={2}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => `${item.id}`}
        />
      </SafeAreaView>
    </View>
  );
};

export default TopProduct;

const imgWidth = (width - 50) / 2;
const imgHeight = (imgWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#FFF',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  titleContainer: {
    height: 50,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  title: {
    color: '#D3D3CF',
    fontSize: 20,
  },
  productContainer: {
    paddingLeft: 10,
    paddingBottom: 20,
  },
  productImg: {
    width: imgWidth,
    height: imgHeight,
  },
  productName: {
    paddingLeft: 8,
    fontWeight: '500',
    color: '#D3D3CF',
    fontSize: 15,
  },
  productPrice: {
    paddingLeft: 8,
    color: '#662F90',
  },
});
