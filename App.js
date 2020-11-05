import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import AppBackground from './src/components/atoms/AppBackground'
import Appbar from './src/components/atoms/Appbar'
import PurpleRoundBtn from './src/components/atoms/PurpleRoundBtn';
import ShopListItem from './src/components/molecules/ShopListItem';
import StoreItemListItem from './src/components/molecules/StoreItemListItem';

function App() {
  return (
    <View>
      <AppBackground>
        <Appbar image={require('./src/assets/images/logo.png')}/>
      </AppBackground>
    </View>
  )
}

export default App;
