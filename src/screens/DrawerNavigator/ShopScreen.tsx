import React from 'react'
import { View, FlatList } from 'react-native'
import ShopListItem from '../../components/molecules/ShopListItem'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import Merchant from '../../models/Merchant'
import testInventory from '../../models/testInventory'

export interface Props {
    navigation: any
}

const ShopScreen: React.FC<Props> = ({navigation}) => {
    const data: Merchant[] = testInventory
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <SearchWithBackground navigation={navigation} />
            <View style={{height: 20}}></View>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    return (
                        <ShopListItem item={item}/>
                    )
                }} />
        </View>
    )
}

export default ShopScreen