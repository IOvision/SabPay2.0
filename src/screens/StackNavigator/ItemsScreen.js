import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import SearchWithBackground from '../../components/molecules/SearchWithBackground';
import StoreItemListItem from '../../components/molecules/StoreItemListItem'

import sampleItem from '../../models/testItems'
import { test } from '../../requests';

export default function ItemsScreen({navigation, route}) {

  useEffect(() => {
    test()
  }, [])

  return (
      <View style={{padding: 10, backgroundColor: "white", display: "flex", flex: 1}}>
        <SearchWithBackground navigation={navigation}/>
          <FlatList 
              data={sampleItem}
              keyExtractor={(item) => item.key}
              renderItem={({item, index}) => {
              return <StoreItemListItem item={item} navigation={navigation} />
              }}
          />
      </View>
  )
}
