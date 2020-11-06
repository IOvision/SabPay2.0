import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import SearchBar from './src/components/molecules/SearchBar'

function App() {
  const [test, setTest] = React.useState("")
  console.log(test)
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <Text>Hello World</Text>
      <SearchBar 
        width={300} 
        value={test} 
        onChangeText={setTest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
});

export default App;
