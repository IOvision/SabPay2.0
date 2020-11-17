import React, { useState } from 'react'
import RoundView from '../atoms/RoundView'
import { View, Image, Text, FlatList } from 'react-native'
import { HeaderText, BodyText, OfferText } from '../atoms/Text'
import { CartItemListItemStyles } from '../../styles/FlatListItemStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

function CartItemListItem({style}) {
    const [qty, setQty] = useState(1)
    return (
        <RoundView style={[CartItemListItemStyles.container, style]}>
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
                        <LinearGradient style={{borderRadius: 5}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                            <TouchableOpacity style={CartItemListItemStyles.touchableForIncDec} onPress={() => setQty(qty + 1)} activeOpacity={0.9}>
                                <MaterialCommunityIcons name="plus" color={colors.white} size={16} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={CartItemListItemStyles.itemQty}>
                        <BodyText>{qty}</BodyText>
                    </View>
                    <View style={CartItemListItemStyles.itemQtyDecrease}>
                        <LinearGradient style={{borderRadius: 5}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                            <TouchableOpacity style={CartItemListItemStyles.touchableForIncDec} onPress={() => setQty(qty - 1)} activeOpacity={0.9}>
                                <MaterialCommunityIcons name="minus" color={colors.white} size={16} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </RoundView>
    )
}

export default CartItemListItem
