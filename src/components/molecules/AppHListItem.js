import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import common from '../../styles/common';

export default AppHListItem = ({image, title}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={[common.text, styles.text]}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    marginBottom: 40,
    alignItems: 'center',
    marginEnd: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: common.colors.medium,
  },
});
