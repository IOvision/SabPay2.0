import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CaptionText } from './Text'
import colors from '../../assets/colors'

export interface Props {
    text: string
}

const OfferOnSwipeText: React.FC<Props> = (props) => {
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

export default OfferOnSwipeText

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