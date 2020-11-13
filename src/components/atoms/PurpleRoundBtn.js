import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors.js'
import { HeaderText } from '../atoms/Text.js'

function PurpleRoundBtn(props) {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.9}>
            <View style={[styles.container, props.style]}>
                <HeaderText style={{color: props.color ? props.color :"white", ...props.textStyle}}>{props.text}</HeaderText>
            </View >
        </TouchableOpacity>
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