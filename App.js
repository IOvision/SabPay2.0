import React from 'react';
<<<<<<< Updated upstream
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
=======
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {HeaderText} from './src/components/atoms/Text';
import ListItem from './src/components/molecules/lists/ListItem';
import ListItemSeparator from './src/components/molecules/lists/ListItemSeparator';
const data = [
  {id: '1', title: 'John Snow'},
  {id: '2', title: 'Arya Stark'},
  {id: '3', title: 'Sansa Stark'},
  {id: '4', title: 'Fucking Lanisters'},
];
export default App = () => {
  return (
    <View style={styles.container}>
      <HeaderText>Welcome to Game of thrones</HeaderText>
      <FlatList
        data={data}
        keyExtractor={(item, index) => {
          index.toString();
        }}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item}) => {
          return (
            <ListItem title={item.title} materialIconName="chevron-right" />
          );
        }}
      />
>>>>>>> Stashed changes
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
    width: `100%`,
    height: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
=======
    padding: 10,
>>>>>>> Stashed changes
  },
});
