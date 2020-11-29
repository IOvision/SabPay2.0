import React from 'react';
import {ImageBackground, ImageBackgroundProps, ImageSourcePropType} from 'react-native';

export interface Props {
  image: ImageSourcePropType,
  style: ImageBackgroundProps
}

const AppBackground: React.FC<Props> = ({children, image, style}) => {
  return (
    <ImageBackground style={[style, {flex: 1}]} source={image}>
      {children}
    </ImageBackground>
  );
};

export default AppBackground