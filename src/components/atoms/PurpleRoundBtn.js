import React from 'react'
import { StyleSheet, View } from 'react-native'
import { HeaderText } from '../atoms/Text.js'

function PurpleRoundBtn(props) {
    return (
        <View>
            <View style={styles.container}>
                <HeaderText>{props.text}</HeaderText>
            </View >
        </View>
    )
}

export default PurpleRoundBtn

const styles = StyleSheet.create({
    container: {
        backgroundColor: "purple",
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 25,
        display: "flex",
        alignSelf: 'baseline'
    }
})