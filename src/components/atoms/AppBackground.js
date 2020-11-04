import React from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { ImageBackground, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export default AppBackground = ({children, image}) => {
  return (
    <ImageBackground style={{width, height}} source={require('../../assets/images/appBackground.png')}>
=======
=======
>>>>>>> Stashed changes
import {ImageBackground} from 'react-native';

export default AppBackground = ({children, image}) => {
  return (
    <ImageBackground style={{flex: 1}} source={image}>
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      {children}
    </ImageBackground>
  );
};
