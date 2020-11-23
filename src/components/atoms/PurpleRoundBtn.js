import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../assets/colors.js'
import { HeaderText } from '../atoms/Text.js'
import LinearGradient from 'react-native-linear-gradient'

function PurpleRoundBtn({onPress, text, style, color, textStyle, gradient, mode}) {

    if (gradient) {
        return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
            <LinearGradient style={[styles.container, style]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                <HeaderText style={{color: color ? color :"white", ...textStyle}}>{text}</HeaderText>
            </LinearGradient>
        </TouchableOpacity>
    )
    }

    if (mode==="outlined") {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
                <View style={[styles.outline, style]}>
                    <HeaderText style={{color: colors.primary, ...textStyle}}>{text}</HeaderText>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
            <View style={[styles.container, style]}>
                {/* <LinearGradient style={[styles.container, props.style]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}> */}
                    <HeaderText style={{color: color ? color :"white", ...textStyle}}>{text}</HeaderText>
                {/* </LinearGradient> */}
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
    },
    outline: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderColor: colors.primary,
        borderRadius: 8
    }
})