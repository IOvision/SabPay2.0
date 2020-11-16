import React, { useEffect } from 'react';
import Colors from './src/assets/colors'
import {
  View, Text, StyleSheet
} from 'react-native';
import Root from './src/navigation/Root'
import SplashScreen from 'react-native-splash-screen'

function App() {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <Root />
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default App