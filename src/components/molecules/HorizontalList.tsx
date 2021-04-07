import React from 'react';
import {View, FlatList, StyleProp, ViewStyle, ListRenderItem} from 'react-native';

export interface Props {
  data: any,
  style: StyleProp<ViewStyle>,
  renderItem: ListRenderItem<any>
}

const HorizontalList: React.FC<Props> = ({data, style, renderItem}) => {
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
