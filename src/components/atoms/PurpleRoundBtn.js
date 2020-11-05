import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HeaderText } from '../atoms/Text.js'

function PurpleRoundBtn(props) {
    return (
        <View style={props.style}>
            <View style={styles.container}>
                <HeaderText style={{color: "white"}}>{props.text}</HeaderText>
            </View >
        </View>
    )
}

export default PurpleRoundBtn

const styles = StyleSheet.create({
    container: {
        backgroundColor: "purple",
        borderRadius: 25,
        padding: 10,
        paddingHorizontal: 30,
        display: "flex",
        alignSelf: 'baseline',
    }
})