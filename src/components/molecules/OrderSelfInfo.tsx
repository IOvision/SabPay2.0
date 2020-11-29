import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderText, BodyText } from '../atoms/Text'

function OrderSelfInfo() {
    return (
        <View style={styles.container}>
            <HeaderText>Santiago D'Souza</HeaderText>
            <BodyText>254-255 pocket-18, sector-24 Rohini Delhi - 110085</BodyText>
            <BodyText>Phone number - +919650625937</BodyText>
        </View>
    )
}

export default OrderSelfInfo

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        padding: 14
    },
})
