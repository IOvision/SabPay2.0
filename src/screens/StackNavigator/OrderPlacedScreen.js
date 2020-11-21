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
            <LinearGradient style={styles.gradient} colors={['#8021EB','#04035C']}>
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
                <DeliveryStatus data={indicator} counter={1} style={{margin: 20}}/>
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
