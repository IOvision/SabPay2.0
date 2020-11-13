import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const { width } = Dimensions.get('window')

const Background = () => {
  return (
    <View style={{
      backgroundColor: colors.primary, 
      width: width/2,
      height: 100,
      marginTop: -50,
      borderRadius: 50,
      alignSelf:'center',
      transform: [
          {scaleX: 2.5}
      ]
  }} />
  );
};

export default Background