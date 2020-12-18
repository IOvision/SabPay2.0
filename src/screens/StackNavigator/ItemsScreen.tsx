import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import SearchWithBackground from '../../components/molecules/SearchWithBackground';
import StoreItemListItem from '../../components/molecules/StoreItemListItem'
import Item from '../../models/Item';
import SkeletonPlaceholder from "react-native-skeleton-placeholder"
import { Divider } from 'react-native-paper'

import { getItemsFromTag } from '../../requests';

export interface Props {
  navigation: any,
  route: {
    params: {
      tag: string
    }
  }
}

const ItemSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
        <View style={{ width: 100, height: 100 }} />
        <View style={{ marginLeft: 20, flex: 1 }}>
          <View style={{ width: 160, height: 20, borderRadius: 4 }} />
          <View style={{ marginTop: 6, width: 60, height: 20, borderRadius: 4 }}/>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between'}}>
            <View style={{ width: 50, height: 35, borderRadius: 4 }} />
            <View style={{ width: 60, height: 35, borderRadius: 4 }}/>
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  )
}

const ItemsScreen: React.FC<Props> = ({navigation, route}) => {

  const [data, setData] = useState<Item[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getItemsFromTag(route.params.tag, "null", (err, resp) => {
      if (err)
        return console.log(err)
      console.log(route.params.tag + ": " + resp)
      setIsLoading(false);
      setData(resp)
    })
  }, [])

  const example = [1,2,3,4,5,6,7,8,9,10]

  return (
      <View style={{backgroundColor: "white", display: "flex", flex: 1}}>
        <SearchWithBackground navigation={navigation}/>
        {
          isLoading ? (
            <View style={{flex: 1, padding: 10}}>
              <FlatList 
                data={example}
                keyExtractor={(item) => item.toString()}
                renderItem={() => {
                  return <ItemSkeleton />
                }}
              />
            </View>
          ) : (
            <FlatList 
              data={data}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <Divider/>}
              renderItem={({item}) => { 
                return <StoreItemListItem item={item} navigation={navigation} />
              }}
              onEndReached={({ distanceFromEnd }) => {
                if(distanceFromEnd == 0) {
                  console.log("end reached")
                }
              }}
              ListFooterComponent={() => {
                return (
                  <View style={{paddingHorizontal: 10, paddingBottom: 10}}>
                    <ItemSkeleton />
                  </View>
                )
              }}
          />
          )
        }
      </View>
  )
}

export default ItemsScreen