import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import common from '../../styles/common';

export default AppVListItem = ({image, title}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[common.text, styles.text]}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    width: '100%',
    height: 200,
    marginBottom: 40,
  },
  image: {
    width: `100%`,
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: common.colors.medium,
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: common.colors.white,
    position: 'absolute',
    padding: 5,
    bottom: -20,
    width: '100%',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: common.colors.medium,
  },
});
