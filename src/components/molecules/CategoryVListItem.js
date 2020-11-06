import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import colors from '../../assets/colors';
import TextStyle from '../../styles/TextStyle';

export default CategoryVListItem = ({image, title}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[TextStyle.bodyText, styles.text]}>{title}</Text>
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
    color: colors.medium,
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    position: 'absolute',
    padding: 5,
    bottom: -20,
    width: '100%',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.medium,
  },
});
