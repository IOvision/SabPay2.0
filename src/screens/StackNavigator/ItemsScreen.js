import React from 'react'
import { View, Text, FlatList } from 'react-native'
import StoreItemListItem from '../../components/molecules/StoreItemListItem'

export default function ItemsScreen({navigation}) {
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
        },
      ];
    return (
        <View style={{padding: 10, backgroundColor: "white", display: "flex", flex: 1}}>
            <FlatList 
                data={DATA}
                renderItem={({item, index}) => {
                return <StoreItemListItem />
                }}
            />
        </View>
    )
}