import React from 'react';
import {ImageBackground} from 'react-native';

export default Background = ({children, image, style}) => {
  return (
    <ImageBackground style={[style, {flex: 1}]} source={image}>
      {children}
    </ImageBackground>
  );
};
