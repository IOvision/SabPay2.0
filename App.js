import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import AppBackground from './src/components/atoms/AppBackground'
import Appbar from './src/components/atoms/Appbar'
import Otp from './src/components/molecules/Otp';

function App() {
  return (
    <View>
      <AppBackground>
        <Appbar image={require('./src/assets/images/logo.png')}/>
        <Otp />
      </AppBackground>
    </View>
  )
}

export default App;
