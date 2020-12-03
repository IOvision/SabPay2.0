import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import SearchWithBackground from '../../components/molecules/SearchWithBackground';
import StoreItemListItem from '../../components/molecules/StoreItemListItem'
import Item from '../../models/Item';

import { test, getItems } from '../../requests';

export interface Props {
  navigation: any,
  route: any
}

const ItemsScreen: React.FC<Props> = ({navigation, route}) => {

  const [data, setData] = useState<Item[] | null>(null)

  useEffect(() => {
    getItems("test", "null", (err, resp) => {
      if (err)
        return console.log(err)
      setData(resp)
    })
  }, [])

  return (
      <View style={{padding: 10, backgroundColor: "white", display: "flex", flex: 1}}>
        <SearchWithBackground navigation={navigation}/>
          <FlatList 
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
              return <StoreItemListItem item={item} navigation={navigation} />
              }}
          />
      </View>
  )
}

export default ItemsScreen