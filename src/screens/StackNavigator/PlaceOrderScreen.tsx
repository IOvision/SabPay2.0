import React from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import RoundView from '../../components/atoms/RoundView'
import { BodyText, HeaderText, CaptionText } from '../../components/atoms/Text'
import { RadioButton } from 'react-native-paper'
import CartPriceDetails from '../../components/molecules/CartPriceDetails'
import PlaceOrderDrag from '../../components/molecules/PlaceOrderDrag'
import { RootState } from '../../redux/store'
import { connect } from 'react-redux'
import CartItem from '../../models/CartItem'
import { order } from '../../requests'
import Merchant from '../../models/Merchant'
import User from '../../models/User'
import Order from '../../models/Order'

export interface Props {
    items: CartItem[],
    navigation: any,
    total: number,
    merchant: Merchant,
    user: User,
    discount?: number
}

const OrderDetails: React.FC<Props> = ({items, navigation, total, merchant, user}) => {

    const [paymentMethod, setPaymentMethod] = React.useState("upi")
    const [isLoading, setIsLoading] = React.useState(false)

    const confirm = () => {
        setIsLoading(true)
        order(Order.partialDetails(items, total.toString(), "0"), user.getPhone(), merchant.SK, (err, resp) => {
            if (err) console.log(err)
            if(resp) {
                navigation.replace("OrderPlacedScreen", {
                    qty: items.length,
                    total: total
                })
            }
        })
    }

    if(isLoading) {
        return <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}><HeaderText>Loading</HeaderText></View>
    }

    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
        <ScrollView style={{padding: 10}}>
            <RoundView style={[OrderDetailsStyle.roundView, OrderDetailsStyle.addressContainer]}>
                <View>
                    <BodyText>Deliver to:</BodyText>
                    <HeaderText>Santiago Ramirez</HeaderText>
                    <BodyText>Flat No. 22, Shanu Sangam Residency, Indira Nagar, Kanpur Road, Lucknow</BodyText>
                </View>
                <PurpleRoundBtn text="Change" mode="outlined"/>
            </RoundView>
            <RoundView style={{ ...OrderDetailsStyle.roundView, marginTop: 10, marginBottom: 10}}>
                <CaptionText>Payment Options</CaptionText>
                <RadioButton.Group onValueChange={newValue => setPaymentMethod(newValue)} value={paymentMethod}>
                    <View style={{ ...OrderDetailsStyle.radioButtonItem, marginTop: 20}}>
                        <RadioButton color={colors.primary} value="upi" />
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <BodyText style={{fontSize: 20}}>UPI</BodyText>
                            <Image source={require('../../assets/images/bhim.png')} resizeMode="contain" style={{width: 100, height: 20}} />
                        </View>
                    </View>
                    <View style={OrderDetailsStyle.radioButtonItem}>
                        <RadioButton color={colors.primary} value="wallet" />
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <BodyText style={{fontSize: 20}}>Wallets</BodyText>
                            <Image source={require('../../assets/images/paytm.png')} resizeMode="contain" style={{width: 100, height: 20}} />
                        </View>
                    </View>
                    <View style={OrderDetailsStyle.radioButtonItem}>
                        <RadioButton color={colors.primary} value="card" />
                        <BodyText style={{fontSize: 20}}>Credit/Debit Cards</BodyText>
                    </View>
                    <View style={OrderDetailsStyle.radioButtonItem}>
                        <RadioButton color={colors.primary} value="net-banking" />
                        <BodyText style={{fontSize: 20}}>Net Banking</BodyText>
                    </View>
                    <View style={OrderDetailsStyle.radioButtonItem}>
                        <RadioButton color={colors.primary} value="cod" />
                        <BodyText style={{fontSize: 20}}>Cash on Delivery</BodyText>
                    </View>
                </RadioButton.Group>
            </RoundView>
            <CartPriceDetails price={total} discount={0} style={{marginBottom: 20}}/>
        </ScrollView>
            <PlaceOrderDrag qty={items.length} total={total} confirm={confirm} />
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        total: state.cartReducer.total,
        items: state.cartReducer.items,
        merchant: state.merchantReducer.merchant,
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(OrderDetails)

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