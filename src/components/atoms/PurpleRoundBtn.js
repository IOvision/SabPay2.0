import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../assets/colors.js'
import { HeaderText } from '../atoms/Text.js'

function PurpleRoundBtn(props) {
    return (
        <View>
            <View style={[styles.container, props.style]}>
                <HeaderText style={{color: "white", ...props.textStyle}}>{props.text}</HeaderText>
            </View >
        </View>
    )
}

export default PurpleRoundBtn

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        padding: 10,
        paddingHorizontal: 30,
        display: "flex",
        alignSelf: 'baseline',
    }
})