import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Image
import icLogo from '../../../images/appIcon/ic_logo.png';
import icMenu from '../../../images/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

const Header = (props: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.view_1}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image source={icMenu} style={styles.icon_style} />
        </TouchableOpacity>
        <Text style={styles.titleStyle}>Wearing a Dress</Text>
        <Image source={icLogo} style={styles.icon_style} />
      </View>
      <TextInput style={styles.inputText_view_1} placeholder="Find your item..." />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
    backgroundColor: '#34B089',
    padding: 10,
    justifyContent: 'space-around',
  },
  view_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleStyle: { color: '#FFF', fontFamily: 'Roboto', fontSize: 20},
  inputText_view_1: { height: height / 23, backgroundColor: '#FFF', paddingLeft: 10  },
  icon_style: { width: 25, height: 25 },
});

export default Header;

Header.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};
