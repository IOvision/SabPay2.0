import React from 'react'
import { View } from 'react-native'
import RoundView from './RoundView.js'
import { HeaderText, BodyText } from '../atoms/Text.js'
import { styles } from '../../styles/CartPriceDetailsStyle.js'

function CartPriceDetails({price, discount, total}) {
    return (
        <RoundView>
            <HeaderText>Price Details</HeaderText>
            <View style={styles.horizontalLine}></View>
            <View style={styles.subViews}>
                <View style={styles.priceText}>
                    <BodyText>Price</BodyText>
                </View>
                <BodyText style={styles.actualpriceText}>Rs. {price}</BodyText>
            </View>
            <View style={styles.subViews}>
                <View style={styles.priceText}>
                    <BodyText>Discount</BodyText>
                </View>
                <BodyText>Rs. {discount}</BodyText>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.subViews}>
                <View style={styles.priceText}>
                    <HeaderText>Total</HeaderText>
                </View>
                <HeaderText>Rs. {total}</HeaderText>
            </View>
        </RoundView>
    )
}

export default CartPriceDetails
