import React from 'react';
import {ImageBackground} from 'react-native';

export default AppBackground = ({children, image}) => {
  return (
    <ImageBackground style={{flex: 1}} source={image}>
      {children}
    </ImageBackground>
  );
};
