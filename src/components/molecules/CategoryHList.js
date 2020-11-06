import React from 'react';
import {View, FlatList} from 'react-native';
import CategoryHListItem from './CategoryHListItem';

export default CategoryHList = ({data, style}) => {
  return (
    <View style={style}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <CategoryHListItem image={item.image} title={item.title} />;
        }}
      />
    </View>
  );
};
