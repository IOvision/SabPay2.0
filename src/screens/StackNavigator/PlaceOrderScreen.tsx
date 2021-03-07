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
import Inventory from '../../models/Inventory'
import User from '../../models/User'
import Order, { MerchantOrderDetails, UserOrderDetails } from '../../models/Order'
import AddressDetails, { AddressDetailsType } from '../../components/molecules/AddressDetails'

export interface Props {
    items: CartItem[],
    navigation: any,
    total: number,
    inventory: Inventory,
    user: User,
    discount?: number,
    route: {
        params: {
            deliveryType: number
        }
    },
    quantity: {
        [key: string]: number
    }
}

const OrderDetails: React.FC<Props> = ({items, navigation, total, inventory, user, discount, route, quantity}) => {

    const [paymentMethod, setPaymentMethod] = React.useState("cod")
    const [isLoading, setIsLoading] = React.useState(false)
    const addressRef = React.useRef<AddressDetailsType>(null)
    const [address, setAddress] = React.useState(0)

    let deliveryType: string
    if(route.params.deliveryType === 0) 
        deliveryType = "Express"
    else if(route.params.deliveryType === 1) 
        deliveryType = "Standard"
    else
        deliveryType = "Pick-Up"
    const confirm = () => {
        setIsLoading(true)
        const userDetails: UserOrderDetails = {
            name: user.username,
            phone: user.phoneNumber,
            address: user.address[address]
        }
        const merchantDetails: MerchantOrderDetails = {
            name: inventory.shopname,
            phone: inventory.phone,
            address: inventory.address
        }
        order(Order.partialDetails(CartItem.itemsWithQuantity(items, quantity), total.toString(), "0", deliveryType, userDetails, merchantDetails), user.phoneNumber.substr(3), inventory.SK, (err, resp) => {
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
        <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: "white"}}>
            <ScrollView style={{padding: 10}}>
                <RoundView style={[OrderDetailsStyle.roundView, OrderDetailsStyle.addressContainer]}>
                    <View>
                        <BodyText>Deliver to:</BodyText>
                        <View>
                            <HeaderText>{user.username}</HeaderText>
                            <BodyText>{user.address[address]}</BodyText>
                        </View>
                    </View>
                    <PurpleRoundBtn text="Change" mode="outlined" onPress={() => addressRef.current.openAddress()}/>
                </RoundView>
                <RoundView style={{ ...OrderDetailsStyle.roundView, marginTop: 10, marginBottom: 10}}>
                    <CaptionText>Payment Options</CaptionText>
                    <RadioButton.Group onValueChange={newValue => setPaymentMethod(newValue)} value={paymentMethod}>
                        {/* <View style={{ ...OrderDetailsStyle.radioButtonItem, marginTop: 20}}>
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
                        </View> */}
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
        <AddressDetails ref={addressRef} user={user} setSelected={setAddress} selected={user.address[address]}/>
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        total: state.cartReducer.total,
        items: state.cartReducer.items,
        quantity: state.cartReducer.qty,
        inventory: state.inventoryReducer.inventory,
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