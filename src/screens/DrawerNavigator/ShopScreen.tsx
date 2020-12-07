import React from 'react'
import { View, FlatList } from 'react-native'
import ShopListItem from '../../components/molecules/ShopListItem'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import testInventory from '../../models/testInventory'

export interface Props {
    navigation: any
}

const ShopScreen: React.FC<Props> = ({navigation}) => {
    return (
        <View style={{backgroundColor: "white", flex: 1}}>
            <SearchWithBackground navigation={navigation} />
            <View style={{height: 20}}></View>
            <FlatList
                data={testInventory}
                keyExtractor={(index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <ShopListItem navigation={navigation} item={item}/>
                    )
                }} />
        </View>
    )
}

export default ShopScreen