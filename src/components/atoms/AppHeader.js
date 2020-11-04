import React from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

export default AppHeader = ({marginTop, image}) => {
  return (
    <View style={[styles.container, {marginTop}]}>
      <Image source={image} style={styles.logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: `100%`,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    overflow: 'hidden',
  },
  logo: {
    height: 40,
    width: 40,
    margin: 10,
  },
});
