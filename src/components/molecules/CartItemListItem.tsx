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
                    {
                        item.originalPrice ? (
                            <View style={CartItemListItemStyles.discountView}>
                                <BodyText style={CartItemListItemStyles.originalPrice}>Rs. {item.originalPrice}</BodyText>
                            </View>
                        ) : ( null )
                    }
                </View>
                {
                    item.originalPrice ? <OfferText>1 Offer Applied</OfferText> : null
                }
   
                <View style={CartItemListItemStyles.weight}><BodyText>{item.variant}</BodyText></View> 

            </View>
            
            <View style={{alignItems: "center"}}>
                <Image
                    style={CartItemListItemStyles.img}
                    source={{uri: item.image}}
                />
            </View>
        </RoundView>
    )
}

export default CartItemListItem
