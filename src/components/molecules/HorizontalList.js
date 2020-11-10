import React from 'react';
import {View, FlatList} from 'react-native';

function HorizontalList({data, style, renderItem}) {
  return (
    <View style={style}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

export default HorizontalList;
