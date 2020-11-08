import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ListItemSeparator from './src/components/molecules/lists/ListItemSeparator';
import ListItem from './src/components/molecules/lists/ListItem';

const data = [{title: 'one'}, {title: 'one'}, {title: 'one'}, {title: 'one'}];

export default App = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
