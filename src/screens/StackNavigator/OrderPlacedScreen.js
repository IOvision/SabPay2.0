import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import LinearGradient from 'react-native-linear-gradient'
import { HeaderText, BodyText } from '../../components/atoms/Text'
import DeliveryStatus from '../../components/atoms/DeliveryStatus'

export default function OrderPlacedScreen() {
    const indicator = [
        {id: 1, status: 'Ordered'},
        {id: 2, status: 'Shipped'},
        {id: 3, status: 'Delivered'},
    ];
    return (
        <ScrollView style={styles.container}>
            <LinearGradient style={styles.gradient} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#04035C','#8021EB']} useAngle={true} angle={0} angleCenter={{ x: 0.5, y: 0.5}}>
                <HeaderText style={{color: colors.white, fontSize: 25}}>Order Placed!</HeaderText>
                <HeaderText style={{color: colors.white}}>Total Price for 2 items Rs. 285</HeaderText>
            </LinearGradient>
            <View style={styles.innerView}>
                <HeaderText>Delivered by Thu, Nov 19th '20</HeaderText>
            </View>
            <View style={styles.innerView}>
                <HeaderText>Santiago D'Souza</HeaderText>
                <BodyText>254-255, pocket-18, sector-24, rohini delhi-110085</BodyText>
            </View>
            <View style={styles.status}>
                <HeaderText>Delivery Status</HeaderText>
                <DeliveryStatus data={indicator} style={{margin: 20}}/>
            </View>
            <View style={styles.innerView}>
                <HeaderText>Thanks For Shopping</HeaderText>
            </View>
        </ScrollView>
    )
}

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
