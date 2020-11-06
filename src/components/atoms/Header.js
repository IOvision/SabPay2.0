import React from 'react';
import {View, Image} from 'react-native';
import HeaderStyle from './../../styles/HeaderStyle';

export default Header = ({marginTop, image}) => {
  return (
    <View style={[HeaderStyle.container, {marginTop}]}>
      <Image source={image} style={HeaderStyle.logo} />
    </View>
  );
};
