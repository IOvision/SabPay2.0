import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import AppVListItem from './AppVListItem';

export default AppVList = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <AppVListItem image={item.image} title={item.title} />;
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
