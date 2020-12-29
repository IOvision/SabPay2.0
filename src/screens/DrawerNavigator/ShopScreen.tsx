import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import ShopListItem from '../../components/molecules/ShopListItem'
import testInventory from '../../models/testInventory'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { getMerchant } from '../../requests'
import Background from '../../components/atoms/Background'


export interface Props {
    navigation: any, 
    route: {
      params: {
        latitude: number,
        longitude: number
      }
    }
}

const ShopScreen: React.FC<Props> = ({navigation, route}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [inventories, setInventories] = useState(testInventory)
    
    useEffect(() => {
      getMerchant(25.599778, 85.134688, 5, (err, resp) => {

    //   getMerchant(route.params.latitude, route.params.longitude, 5, (err, resp) => {
        console.log("getMerchnat" + route.params.latitude + route.params.longitude)
        if(err) 
          return console.log(err)
          setInventories(resp)
          setIsLoading(false)
      })
    }, [])

    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <Background />
            <View style={{height: 20}}></View>
            {
                isLoading ? (
    
                        <FlatList
                            data={sample}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => { return (
                                <View style={{width: 5}}></View>
                            )}}
                            renderItem={({item}) => {
                            return (
                                <SkeletonPlaceholder >
                                    <View style={{flexDirection: "row", marginTop: 10 }}>
                                        <View style={{ marginTop: 4, width: 70, height: 70, borderRadius: 10, marginLeft: 20 }}/>
                                        <View style={{marginLeft: 20}}>
                                            <View style={{ marginTop: 4, width: 150, height: 15, borderRadius: 4, marginBottom: 4 }} />
                                            <View style={{ marginTop: 4, width: 200, height: 15, borderRadius: 4, marginBottom: 4 }} />
                                            <View style={{ marginTop: 4, width: 100, height: 15, borderRadius: 4, marginBottom: 2 }} />
                                        </View>
                                    </View>
                                </SkeletonPlaceholder>
                            )
                            }}
                        />
                ) : (
                     <FlatList
                        data={inventories}
                        keyExtractor={(index) => index.toString()}
                        renderItem={({item, index}) => {
                            return (
                                <ShopListItem navigation={navigation} item={item} index={index}/>
                            )
                        }}
                    />  
                )
            }
        </View>
    )
}

export default ShopScreen
