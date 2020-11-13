import React, { useState } from 'react'
import RoundView from '../atoms/RoundView'
import { View, Image, Text, FlatList } from 'react-native'
import { HeaderText, BodyText, OfferText } from '../atoms/Text'
import { CartItemListItemStyles } from '../../styles/FlatListItemStyle'
import CartPriceDetails from './CartPriceDetails'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

function CartItemListItem() {
    const [qty, setQty] = useState(1)
    return (
        <RoundView style={CartItemListItemStyles.container}>
            <View style={CartItemListItemStyles.infoView}>
                <HeaderText>Breyers Butterscotch Ripple</HeaderText>

                <View style={CartItemListItemStyles.subView}>
                    <BodyText>Rs. 360</BodyText>
                    <View style={CartItemListItemStyles.discountView}>
                        <Text style={CartItemListItemStyles.originalPrice}>Rs. 600</Text>
                        <OfferText>40% Off</OfferText>
                    </View>
                </View>

                <OfferText>1 Offer Applied</OfferText>

                <RoundView style={CartItemListItemStyles.weight}><BodyText>5Kg</BodyText></RoundView>

            </View>
            
            <View style={{alignItems: "center"}}>
                <Image
                    style={CartItemListItemStyles.img}
                    source={require('../../assets/images/Cauliflower.jpg')}
                />
                <View style={CartItemListItemStyles.itemQtyView}>
                    <View style={CartItemListItemStyles.itemQtyIncrease}>
                        <TouchableOpacity style={CartItemListItemStyles.touchableForIncDec} onPress={() => setQty(qty + 1)} activeOpacity={0.9}>
                            <MaterialCommunityIcons name="plus" color={colors.white} size={16} />
                        </TouchableOpacity>
                    </View>
                    <View style={CartItemListItemStyles.itemQty}>
                        <TouchableOpacity style={{...CartItemListItemStyles.touchableForIncDec, backgroundColor: colors.lightGrey}} activeOpacity={0.9}>
                            <BodyText>{qty}</BodyText>
                        </TouchableOpacity>
                    </View>
                    <View style={CartItemListItemStyles.itemQtyDecrease}>
                    <TouchableOpacity style={CartItemListItemStyles.touchableForIncDec} onPress={() => setQty(qty - 1)} activeOpacity={0.9}>
                        <MaterialCommunityIcons name="minus" color={colors.white} size={16} />
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </RoundView>
    )
}

export default CartItemListItem
