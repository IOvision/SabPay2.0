import React from 'react';
<<<<<<< Updated upstream
import {
  View,
  Text, 
  StyleSheet
} from 'react-native';
import AppBackground from './src/components/atoms/AppBackground'
import Appbar from './src/components/atoms/Appbar'
=======
import {View, StyleSheet, Text} from 'react-native';
>>>>>>> Stashed changes

export default App = () => {
  return (
<<<<<<< Updated upstream
    <View>
      <AppBackground>
        <Appbar image={require('./src/assets/images/logo.png')}/>
      </AppBackground>
=======
    <View style={styles.container}>
      <Text>App</Text>
>>>>>>> Stashed changes
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
});
