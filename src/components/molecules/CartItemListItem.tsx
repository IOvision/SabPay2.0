import React from 'react'
import RoundView from '../atoms/RoundView'
import { View, Image, ViewStyle } from 'react-native'
import { HeaderText, BodyText } from '../atoms/Text'
import { CartItemListItemStyles } from '../../styles/FlatListItemStyle'
import ItemQuantityButton from './ItemQuantityButton'
import CartItem from '../../models/CartItem'

export interface Props{
    item: CartItem,
    style?: ViewStyle
}

const CartItemListItem: React.FC<Props> = ({item, style}) => {
    return (
        <RoundView style={[CartItemListItemStyles.container, style]}>
            <View style={CartItemListItemStyles.infoView}>
                <HeaderText>{item.name}</HeaderText>

                <View style={CartItemListItemStyles.subView}>
                    <BodyText>Rs. {item.price}</BodyText>
                    {/* <View style={CartItemListItemStyles.discountView}>
                        <Text style={CartItemListItemStyles.originalPrice}>Rs. 600</Text>
                        <OfferText>40% Off</OfferText>
                    </View> */}
                </View>

                {/* <OfferText>1 Offer Applied</OfferText> */}

                <View style={CartItemListItemStyles.weight}><BodyText>{item.variant}</BodyText></View>

            </View>
            
            <View style={{alignItems: "center"}}>
                <Image
                    style={CartItemListItemStyles.img}
                    source={{uri: item.image}}
                />
                <ItemQuantityButton item={item} />
            </View>
        </RoundView>
    )
}

export default CartItemListItem
