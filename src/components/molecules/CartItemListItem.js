import React from 'react'
import RoundView from '../atoms/RoundView'
import { View, Image, Text } from 'react-native'
import { HeaderText, BodyText, OfferText } from '../atoms/Text'
import { CartItemListItemStyles } from '../../styles/FlatListItemStyle'

function CartItemListItem() {
    return (
        <RoundView style={CartItemListItemStyles.container}>
            <View style={CartItemListItemStyles.infoView}>
                <HeaderText>Breyers Buttersrcoth Ripple</HeaderText>

                <View style={CartItemListItemStyles.subView}>
                    <BodyText>Rs. 360</BodyText>
                    <View style={CartItemListItemStyles.discountView}>
                        <Text style={CartItemListItemStyles.originalPrice}>Rs. 600</Text>
                        <OfferText>40% Off</OfferText>
                    </View>
                </View>

                <OfferText>1 Offer Apllied</OfferText>

                <View style={CartItemListItemStyles.itemQtyView}>
                    <RoundView style={CartItemListItemStyles.itemQtyIncrease}>
                        <BodyText>+</BodyText>
                    </RoundView>
                    <RoundView style={CartItemListItemStyles.itemQty}>
                        <BodyText>11</BodyText>
                    </RoundView>
                    <RoundView style={CartItemListItemStyles.itemQtyDecrease}>
                        <BodyText>-</BodyText>
                    </RoundView>
                </View>
                
            </View>
            
            <View>
                <Image
                    style={CartItemListItemStyles.img}
                    source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsproutsocial.com%2Finsights%2Fsocial-media-image-sizes-guide%2F&psig=AOvVaw1YzM-RjPTcgQGMXHXbVTtv&ust=1604558173182000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiwjZKj6OwCFQAAAAAdAAAAABAD'}}
                />
            </View>
        </RoundView>
    )
}

export default CartItemListItem
