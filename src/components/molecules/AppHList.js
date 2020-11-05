import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import AppHListItem from './AppHListItem';

export default AppHList = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <AppHListItem image={item.image} title={item.title} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    height: `100%`,
    justifyContent: `center`,
    alignItems: `center`,
  },
});
