import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

function RoundView(props) {
    return (
        <View style={styles.container}>
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
