import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import RoundView from '../atoms/RoundView.js'
import { HeaderText, BodyText } from '../atoms/Text.js'
import { storeListItemStyle } from '../../styles/FlatListItemStyle.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import ItemQuantityButton from './ItemQuantityButton.js';

function StoreItemListItem({navigation}) {
    const [qty, setQty] = useState(0)
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ItemDetails")} activeOpacity={0.9}>
            <RoundView style={storeListItemStyle.container}>
                <View style={storeListItemStyle.itemImageView}>
                    <Image 
                        style={storeListItemStyle.itemImage}
                        source={require("../../assets/images/fortuneOil.jpg")}
                    />
                </View>
                <View style={storeListItemStyle.itemDetailsView}>
                    <HeaderText>Ashirwaad Atta</HeaderText>
                    <BodyText>Rs. 285</BodyText>
                    <View style={storeListItemStyle.itemSizeAndQtyView}>
                        <RoundView style={storeListItemStyle.itemSize}>
                            <BodyText>5 Kg</BodyText>
                        </RoundView>
                        <ItemQuantityButton qty={qty} setQty={setQty} />
                    </View>
                </View>
            </RoundView>
        </TouchableOpacity>
    )
}

export default StoreItemListItem
