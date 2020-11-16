import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import InputText from '../atoms/InputText';
import OtpInput from 'react-otp-input';

function Otp() {
    const [otp, setOtp] = useState("")
    return (
        <View style={styles.inputView}>
            <InputText placeholder="s" style={styles.input} />
            <InputText placeholder="s" style={styles.input} />
            <InputText placeholder="s" style={styles.input} />
            <InputText placeholder="s" style={styles.input} />
            {/* <OtpInput
                value={otp}
                onChange={() => console.log("testing")}
                numInputs={4}
                separator={<span>-</span>}
                shouldAutoFocus={true}
                isInputNum={true}
            /> */}
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
        justifyContent: "center",
        marginBottom: 20
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
