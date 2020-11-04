import React from 'react';
import { ImageBackground, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export default AppBackground = ({children, image}) => {
  return (
    <ImageBackground style={{width, height}} source={require('../../assets/images/appBackground.png')}>
      {children}
    </ImageBackground>
  );
};
