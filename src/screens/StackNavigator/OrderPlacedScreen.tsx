import React, { useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import LinearGradient from 'react-native-linear-gradient'
import { HeaderText, BodyText } from '../../components/atoms/Text'
import DeliveryStatus from '../../components/atoms/DeliveryStatus'
import { connect } from 'react-redux'
import { clear } from '../../redux/actions/cart'
import Order from '../../models/Order'

export interface Props {
    route: {
        params: {
            order: Order,
            qty: number
        }
    },
    navigation: any,
    clearCart: () => void
}

const OrderPlacedScreen: React.FC<Props> = ({route, navigation, clearCart}) => {
    console.log("Route ", route)
    useEffect(() => {
        clearCart()
    }, [])
    return (
        <ScrollView style={styles.container}>
            <LinearGradient style={styles.gradient} colors={['#8021EB','#04035C']}>
                <HeaderText style={{color: colors.white, fontSize: 25}}>Order Placed!</HeaderText>
                <HeaderText style={{color: colors.white}}>Total Price for {route.params.qty} {route.params.qty < 2 ? "item" : "items"} Rs. {route.params.order.total}</HeaderText>
            </LinearGradient>
            <View style={styles.innerView}>
                <HeaderText>{route.params.order.user.name}</HeaderText>
                <BodyText>{route.params.order.user.address}</BodyText>
            </View>
            <View style={styles.status}>
                <HeaderText>Delivery Status</HeaderText>
                <DeliveryStatus counter={"order placed"} style={{margin: 20}}/>
            </View>
            <View style={styles.innerView}>
                <HeaderText>Thanks For Shopping</HeaderText>
            </View>
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clear()) 
    }
}

export default connect(null, mapDispatchToProps)(OrderPlacedScreen)

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
    },
    gradient: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200
    },
    innerView: {
        backgroundColor: colors.white,
        padding: 20,
        marginBottom: 10
    },
    status: {
        backgroundColor: colors.white,
        padding: 20,
        marginBottom: 10,
        height: 300
    }
})
