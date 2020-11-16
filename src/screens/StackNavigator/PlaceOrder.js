import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import RoundView from '../../components/atoms/RoundView'
import { BodyText, HeaderText, CaptionText } from '../../components/atoms/Text'
import { RadioButton } from 'react-native-paper'

const OrderDetails = () => {
    const [paymentMethod, setPaymentMethod] = React.useState("upi")
    return (
        <View style={{padding: 10}}>
            <RoundView style={[OrderDetailsStyle.roundView, OrderDetailsStyle.addressContainer]}>
                <View>
                    <BodyText>Deliver to:</BodyText>
                    <HeaderText>Santiago Ramirez</HeaderText>
                    <BodyText>Flat No. 22, Shanu Sangam Residency, Indira Nagar, Kanpur Road, Lucknow</BodyText>
                </View>
                <PurpleRoundBtn text="Change" mode="outlined"/>
            </RoundView>
            <RoundView style={{ ...OrderDetailsStyle.roundView, marginTop: 10}}>
                <CaptionText style={{fontSize: 20}}>Payment Options</CaptionText>
                <RadioButton.Group onValueChange={newValue => setPaymentMethod(newValue)} value={paymentMethod}>
                    <View style={{ ...OrderDetailsStyle.radioButtonItem, marginTop: 20}}>
                        <RadioButton color={colors.primary} value="upi" />
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <BodyText style={{fontSize: 24}}>UPI</BodyText>
                            <Image source={require('../../assets/images/bhim.png')} resizeMode="contain" style={{width: 100, height: 20}} />
                        </View>
                    </View>
                    <View style={OrderDetailsStyle.radioButtonItem}>
                        <RadioButton color={colors.primary} value="wallet" />
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <BodyText style={{fontSize: 24}}>Wallets</BodyText>
                            <Image source={require('../../assets/images/paytm.png')} resizeMode="contain" style={{width: 100, height: 20}} />
                        </View>
                    </View>
                    <View style={OrderDetailsStyle.radioButtonItem}>
                        <RadioButton color={colors.primary} value="card" />
                        <BodyText style={{fontSize: 24}}>Credit/Debit Cards</BodyText>
                    </View>
                    <View style={OrderDetailsStyle.radioButtonItem}>
                        <RadioButton color={colors.primary} value="net-banking" />
                        <BodyText style={{fontSize: 24}}>Net Banking</BodyText>
                    </View>
                    <View style={OrderDetailsStyle.radioButtonItem}>
                        <RadioButton color={colors.primary} value="cod" />
                        <BodyText style={{fontSize: 24}}>Cash on Delivery</BodyText>
                    </View>
                </RadioButton.Group>
            </RoundView>
            <RoundView style={[OrderDetailsStyle.roundView, OrderDetailsStyle.pricingContainer]}>
                <View style={OrderDetailsStyle.pricingText}>
                    <CaptionText style={{fontSize: 16}}>Price Details</CaptionText>
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: colors.mediumGrey}} />
                <View style={{paddingVertical: 10}}>
                    <View style={{ ...OrderDetailsStyle.pricingText, paddingVertical: 0}}>
                        <BodyText>Price</BodyText>
                        <BodyText>Rs. 300</BodyText>
                    </View>
                    <View style={{ ...OrderDetailsStyle.pricingText, paddingVertical: 0}}>
                        <BodyText>Discount</BodyText>
                        <BodyText>Rs. 15</BodyText>
                    </View>
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: colors.mediumGrey}} />
                <View style={OrderDetailsStyle.pricingText}>
                    <HeaderText>Total</HeaderText>
                    <HeaderText>Rs. 285</HeaderText>
                </View>
            </RoundView>
        </View>
    )
}

export default OrderDetails

const OrderDetailsStyle = StyleSheet.create({
    roundView: {
        borderWidth: 1, 
        borderRadius: 8, 
        borderColor: colors.mediumGrey, 
    },
    addressContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    radioButtonItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    pricingContainer: {
        padding: 0,
        marginTop: 10
    },
    pricingText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 15
    }
})