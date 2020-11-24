//React
import React, { useEffect } from 'react';
import Colors from './src/assets/colors'
import {
  View, Text, StyleSheet
} from 'react-native';
import Root from './src/navigation/Root'
import SplashScreen from 'react-native-splash-screen'

//Amplify
import Amplify from 'aws-amplify'
import awsConfig from './aws-exports'

Amplify.configure(awsConfig)

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