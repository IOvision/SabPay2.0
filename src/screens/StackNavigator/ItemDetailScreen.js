import React from 'react'
import { View, Text } from 'react-native'
import DetailedItem from '../../components/molecules/DetailedItem'

export default function ItemDetailScreen() {
    const data = [
        {
            image: require('../../assets/images/Cauliflower.jpg'),
            name: "Aloo",
            price: "29",
            strikePrice: "20",
            percent: "1",
            quantityArray: ["1", "2"],
        }
    ]
    return (
        <View>
            <DetailedItem data={data} />
        </View>
    )
}
