import React from 'react';
<<<<<<< Updated upstream
import { ImageBackground, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export default AppBackground = ({children, image}) => {
  return (
    <ImageBackground style={{width, height}} source={require('../../assets/images/appBackground.png')}>
=======
import {ImageBackground} from 'react-native';

export default AppBackground = ({children, image}) => {
  return (
    <ImageBackground style={{flex: 1}} source={image}>
>>>>>>> Stashed changes
      {children}
    </ImageBackground>
  );
};
