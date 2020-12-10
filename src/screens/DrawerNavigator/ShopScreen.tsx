import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import ShopListItem from '../../components/molecules/ShopListItem'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import testInventory from '../../models/testInventory'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import RNLocation from "react-native-location";

export interface Props {
    navigation: any
}

const ShopScreen: React.FC<Props> = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [location, setLocation] = useState(null)
    let locationSubscription = null
    useEffect(() => {
        RNLocation.configure({
                distanceFilter: 5.0
        });
        RNLocation.requestPermission({
                ios: "whenInUse",
                android: {
                  detail: "fine",
                  rationale: {
                    title: "Location permission",
                    message: "We use your location to demo the library",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                  }
                }
              }).then(granted => {
                if (granted) {
                  _startUpdatingLocation();
                }
                });
            //axios request
        setIsLoading(false)
      })
      const _startUpdatingLocation = () => {
        locationSubscription = RNLocation.subscribeToLocationUpdates(
          locations => {
            console.log(locations)
            setLocation(locations[0])
          }
        );
      };

      const _stopUpdatingLocation = () => {
        locationSubscription && locationSubscription();
        setLocation(null)
        console.log("stop")
      };
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
                        data={testInventory}
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