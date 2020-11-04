import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import common from '../../styles/common';

const AppTextInput = ({width, ...otherProps}) => {
  return (
    <View style={[styles.container, {width}]}>
      <TextInput style={common.text} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: common.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    marginVertical: 8,
    padding: 5,
  },
});

export default AppTextInput;
