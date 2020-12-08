import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import RoundView from '../atoms/RoundView'
import { HeaderText, BodyText } from '../atoms/Text'
import { styles } from '../../styles/CartPriceDetailsStyle'

export interface Props {
    price: number,
    discount: number,
    style?: StyleProp<ViewStyle>
}

const CartPriceDetails: React.FC<Props> = ({price, discount, style}) => {
    return (
        <RoundView style={[styles.container, style]}>
            <HeaderText style={{fontWeight: "normal"}}>Price Details</HeaderText>
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
                <HeaderText>Rs. {price-discount}</HeaderText>
            </View>
        </RoundView>
    )
}

export default CartPriceDetails
