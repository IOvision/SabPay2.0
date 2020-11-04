import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import AppBackground from './src/components/atoms/AppBackground'
import Appbar from './src/components/atoms/Appbar'

function App() {
  return (
    <View>
      <AppBackground>
        <Appbar image={require('./src/assets/images/logo.png')}/>
      </AppBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
