import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import ShopListItem from '../../components/molecules/ShopListItem'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import testInventory from '../../models/testInventory'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import RNLocation from "react-native-location";
import { getMerchant } from '../../requests'

export interface Props {
    navigation: any
}

const ShopScreen: React.FC<Props> = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [inventories, setInventories] = useState(testInventory)
    const [location, setLocation] = useState({})
    let locationSubscription = null
    RNLocation.configure({
      distanceFilter: 5.0
    })
    
    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "coarse"
      }
    }).then(granted => {
        if (granted) {
          locationSubscription = RNLocation.subscribeToLocationUpdates(
            locations => {
              console.log(locations)
              setLocation(locations[0])
              //getMerchant(location.latitude, location.longitude, 5, (err, resp) => {
              getMerchant(26.847170, 80.943422, 5, (err, resp) => {
                if(err) 
                  return console.log(err)
                  setInventories(resp)
                  setIsLoading(false)
              })
            }
          );
        }
    })

    const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <SearchWithBackground navigation={navigation} />
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
                        renderItem={({item}) => {
                            return (
                                <ShopListItem navigation={navigation} item={item} />
                            )
                        }}
                    />
                )
            }
        </View>
    )
}

export default ShopScreen