import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import CategoryVListItem from './CategoryVListItem';

export default CategoryVList = ({data, style}) => {
  return (
    <View style={style}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <CategoryVListItem image={item.image} title={item.title} />;
        }}
      />
    </View>
  );
};
