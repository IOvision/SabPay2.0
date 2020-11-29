import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

export interface Props {
    style?: StyleProp<ViewStyle>
}

const RoundView: React.FC<Props> = (props) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20
    }
})

export default RoundView
