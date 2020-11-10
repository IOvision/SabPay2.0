import React from 'react';
import Colors from './src/assets/colors'
import {
  View, Text, StyleSheet
} from 'react-native';
import Root from './src/navigation/Root'

function App() {
  return (
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <Root />
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default App