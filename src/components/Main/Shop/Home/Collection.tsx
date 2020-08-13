import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import imgBanner from '../../../../images/temp/banner.jpg';
const { height, width } = Dimensions.get('window');

const Collection = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.textStyle}>SPRING COLLECTION</Text>
      </View>
      <View style={{ flex: 4 }}>
        <Image source={imgBanner} style={styles.imgStyle} />
      </View>
    </View>
  );
};

export default Collection;

const imgWidth = width - 40;
const imgHeigh = (imgWidth / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 20,
    color: '#AFAEAF',
  },
  imgStyle: {
    width: imgWidth,
    height: imgHeigh,
  },
});
