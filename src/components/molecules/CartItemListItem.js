import React, { useState } from 'react'
import RoundView from '../atoms/RoundView'
import { View, Image, Text, FlatList } from 'react-native'
import { HeaderText, BodyText, OfferText } from '../atoms/Text'
import { CartItemListItemStyles } from '../../styles/FlatListItemStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import ItemQuantityButton from './ItemQuantityButton'

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
                <ItemQuantityButton qty={qty} setQty={setQty} />
            </View>
        </RoundView>
    )
}

export default CartItemListItem
