import React, { useEffect, useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import SearchWithBackground from '../../components/molecules/SearchWithBackground';
import StoreItemListItem from '../../components/molecules/StoreItemListItem'
import Item from '../../models/Item';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { test, getItems } from '../../requests';
import testItems from '../../models/testItems'
import RoundView from '../../components/atoms/RoundView';

export interface Props {
  navigation: any,
  route: any
}

const ItemsScreen: React.FC<Props> = ({navigation, route}) => {

  const [data, setData] = useState<Item[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getItems("test", "null", (err, resp) => {
      if (err)
        return console.log(err)
      else {
        setIsLoading(false);
      }
      setData(testItems)
    })
  }, [])

  const example = [1,2,3,4,5,6,7,8,9,10]

  return (
      <View style={{backgroundColor: "white", padding: 10, display: "flex", flex: 1}}>
        <SearchWithBackground navigation={navigation}/>
        {
          isLoading ? (
            <View style={{flex: 1, padding: 10}}>
              <FlatList 
                data={example}
                keyExtractor={(item) => item.toString()}
                renderItem={() => {
                  return (
                    <SkeletonPlaceholder >
                      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10}}>
                        <View style={{ width: 100, height: 100, marginLeft: 10 }} />
                        <View style={{ marginLeft: 20 }}>
                          <View style={{ width: 160, height: 20, borderRadius: 4 }} />
                          <View style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}/>
                          <View style={{ marginTop: 15, width: 30, height: 30, borderRadius: 4 }} />
                        </View>
                        <View style={{ width: 70, height: 40, borderRadius: 4, marginTop: 60 }}></View>
                      </View>
                    </SkeletonPlaceholder>
                  )
                }}
              />
            </View>
          ) : (
            <FlatList 
              data={data}
              keyExtractor={(item) => item.id}
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
                  <View style={{flex: 1, padding: 10}}>
                    <SkeletonPlaceholder>
                      <View style={{flexDirection: "row", alignItems: "center", marginTop: 10, marginLeft: 10}}>
                        <View style={{ width: 100, height: 100 }} />
                        <View style={{ marginLeft: 20 }}>
                          <View style={{ width: 160, height: 20, borderRadius: 4 }} />
                          <View style={{ marginTop: 6, width: 60, height: 20, borderRadius: 4 }}/>
                          <View style={{ marginTop: 15, width: 30, height: 30, borderRadius: 4 }} />
                        </View>
                        <View style={{ width: 70, height: 40, borderRadius: 4, marginTop: 60, marginEnd: 15 }}/>
                      </View>
                    </SkeletonPlaceholder>
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