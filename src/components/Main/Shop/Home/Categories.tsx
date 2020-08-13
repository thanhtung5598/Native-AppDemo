import React from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';

import littleImg from '../../../../images/temp/little.jpg';
import maxiImg from '../../../../images/temp/party.jpg';
import partyImg from '../../../../images/temp/maxi.jpg';

const { height, width } = Dimensions.get('window');

const Collection = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
      </View>
      <View style={{ flex: 4 }}>
        <Swiper>
          <ImageBackground source={littleImg} style={styles.imgStyle}>
            <Text style={styles.cateTitle}>Maxi Dress</Text>
          </ImageBackground>
          <ImageBackground source={maxiImg} style={styles.imgStyle}>
            <Text style={styles.cateTitle}>Maxi Dress</Text>
          </ImageBackground>
          <ImageBackground source={partyImg} style={styles.imgStyle}>
            <Text style={styles.cateTitle}>Maxi Dress</Text>
          </ImageBackground>
        </Swiper>
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
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: '#AFAEAF',
  },
  cateTitle: {
    fontSize: 15,
    color: '#9A9A9A',
  },
  imgStyle: {
    width: imgWidth,
    height: imgHeigh,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
