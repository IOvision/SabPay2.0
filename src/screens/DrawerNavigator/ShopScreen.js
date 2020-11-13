import React from 'react'
import { View, FlatList } from 'react-native'
import ShopListItem from '../../components/molecules/ShopListItem'

export default function ShopScreen() {
    const data = [
        {
            image: require('../../assets/images/dryFruits.png'),
            shopName: "Abhishek General Store",
            shopAddress: "404",
            stars: 5
        },
        {
            image: require('../../assets/images/dryFruits.png'),
            shopName: "Abhishek General Store",
            shopAddress: "404",
            stars: 5
        },
        {
            image: require('../../assets/images/dryFruits.png'),
            shopName: "Abhishek General Store",
            shopAddress: "404",
            stars: 5
        }
    ]
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={() => {
                    return (
                        <ShopListItem />
                    )
                }} />
        </View>
    )
}
