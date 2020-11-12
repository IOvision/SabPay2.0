import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CaptionText } from '../atoms/Text'
import colors from '../../assets/colors'

export default function OfferOnSwipeText(props) {
    if(props.text == "CONFIRM") {
        return (
            <View style={styles.containerConfirm}> 
            <CaptionText style={{color: "#006400"}}>{props.text}</CaptionText>
            </View>
        )
    }
    return (
        <View style={styles.containerDiscard}> 
            <CaptionText style={{color: "red"}}>{props.text}</CaptionText>
        </View>
    )
}

const styles = StyleSheet.create({
    containerDiscard: {
        padding: 10, 
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 2,
        margin: 10,
        backgroundColor: colors.background
    },
    containerConfirm: {
        padding: 10, 
        borderRadius: 10,
        borderColor: "#006400",
        borderWidth: 2,
        margin: 10,
        backgroundColor: colors.background
    }
})