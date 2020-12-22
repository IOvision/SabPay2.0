import React from 'react'
import RoundView from '../atoms/RoundView'
import { View, Image, ViewStyle } from 'react-native'
import { HeaderText, BodyText, OfferText } from '../atoms/Text'
import { CartItemListItemStyles } from '../../styles/FlatListItemStyle'
import CartItem from '../../models/CartItem'
import CartQuantityButton from './CartQuantityButton'

export interface Props{
    item: CartItem,
    style?: ViewStyle,
    show: boolean
}

const CartItemListItem: React.FC<Props> = ({item, style, show}) => {
    return (
        <RoundView style={[CartItemListItemStyles.container, style]}>
            <View style={CartItemListItemStyles.infoView}>
                <HeaderText>{item.name}</HeaderText>
                <View style={CartItemListItemStyles.subView}>
                    <BodyText>Rs. {item.price}</BodyText>
                    <View style={CartItemListItemStyles.discountView}>
                        <BodyText style={CartItemListItemStyles.originalPrice}>Rs. 600</BodyText>
                        <OfferText>40% Off</OfferText>
                    </View>
                </View>

                <OfferText>1 Offer Applied</OfferText>
   
                <View style={CartItemListItemStyles.weight}><BodyText>{item.variant}</BodyText></View> 

            </View>
            
            <View style={{alignItems: "center"}}>
                <Image
                    style={CartItemListItemStyles.img}
                    source={{uri: item.image}}
                />
                {
                    show ? <CartQuantityButton item={item} /> : null
                }
            </View>
        </RoundView>
    )
}

export default CartItemListItem
