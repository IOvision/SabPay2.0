import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import Root from './src/navigation/Root'

function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <Root />
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default App