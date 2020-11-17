import React from 'react'
import { View, ScrollView, StyleSheet, Image } from 'react-native'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import RoundView from '../../components/atoms/RoundView'
import { BodyText, HeaderText, CaptionText } from '../../components/atoms/Text'
import { RadioButton } from 'react-native-paper'
import CartPriceDetails from '../../components/molecules/CartPriceDetails'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PlaceOrderDrag from '../../components/molecules/PlaceOrderDrag'

const OrderDetails = ({navigation}) => {
    
    const [paymentMethod, setPaymentMethod] = React.useState("upi")
    const sheetRef = React.useRef(null)

    const renderContinue = () => (
        <View style={{backgroundColor: 'white'}}>
            <PanGestureHandler maxPointers={1}>
                <Animated.View>
                    <Icon name="cart" color={colors.primary} size={24} />
                </Animated.View>
            </PanGestureHandler>
        </View>
    )

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
            <CartPriceDetails style={{marginBottom: 20}}/>
        </ScrollView>
            <PlaceOrderDrag navigation={navigation}/>
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