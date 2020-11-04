import React from 'react';
import {Text} from 'react-native';
import {text} from '../../styles/common';

const AppText = ({children, style, ...otherProps}) => {
  return (
    <Text style={[text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;
