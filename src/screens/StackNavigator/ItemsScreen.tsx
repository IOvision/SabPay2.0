import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import SearchWithBackground from '../../components/molecules/SearchWithBackground';
import StoreItemListItem from '../../components/molecules/StoreItemListItem'
import Item from '../../models/Item';
import { Divider } from 'react-native-paper'
import { getItemsFromTag } from '../../requests';
import Skeleton from '../../components/atoms/Skeleton';

export interface Props {
  navigation: any,
  route: {
    params: {
      tag: string[]
    }
  }
}

const ItemSkeleton = () => {
  return (
    <View style={{flexDirection: "row", alignItems: "center", marginVertical: 5}}>
      <Skeleton width={100} height={100} borderRadius={0} style={{ width: 100, height: 100 }} />
      <View style={{ marginLeft: 20, flex: 1 }}>
        <Skeleton width={160} height={10} borderRadius={4}  style={{ width: 160, height: 20, borderRadius: 4 }} />
        <Skeleton width={60} height={20} borderRadius={4} style={{ marginTop: 6, width: 60, height: 20, borderRadius: 4 }}/>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between'}}>
          <Skeleton width={50} height={35} borderRadius={4} style={{ width: 50, height: 35, borderRadius: 4 }} />
          <Skeleton width={60} height={35} borderRadius={4} style={{ width: 60, height: 35, borderRadius: 4 }}/>
        </View>
      </View>
    </View>   
  )
}

const ItemsScreen: React.FC<Props> = ({navigation, route}) => {

  const [data, setData] = useState<Item[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    var promises : Promise<Array<Item>>[] = []
    route.params.tag.forEach(element => {
      promises.push(getItemsFromTag(element, "null"))
    });
    Promise.all(promises)
    .then(res => {
      var temp: Item[] = []
      res.forEach(element => {
        element.forEach(item => {
          temp.push(item)
        })
      });
      console.log(temp)
      setData(temp)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
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
              keyExtractor={(item) => item.SK}
              ItemSeparatorComponent={() => <Divider />}
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