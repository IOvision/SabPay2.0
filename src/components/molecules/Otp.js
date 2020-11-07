import React from 'react'
import { StyleSheet, View } from 'react-native';
import InputText from '../atoms/InputText';

function Otp() {
    return (
        <View style={styles.inputView}>
            <InputText style={styles.input} />
            <InputText style={styles.input} />
            <InputText style={styles.input} />
            <InputText style={styles.input} />
        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    inputView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        marginTop: 20,
        marginHorizontal: 10
    },
    btn: {
        marginTop: 20,
        display: "flex",
        alignSelf: "flex-end",
        marginLeft: 20
    }
})
