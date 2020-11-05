import React from 'react'
import { StyleSheet, View } from 'react-native';
import PurpleRoundBtn from '../atoms/PurpleRoundBtn';
import RoundView from '../atoms/RoundView';
import { HeaderText } from '../atoms/Text.js'
import InputText from '../atoms/InputText';

function Otp() {
    return (
        <RoundView style={styles.container}>
            <HeaderText>Enter OTP</HeaderText>
            <View style={styles.inputView}>
                <InputText style={styles.input} />
                <InputText style={styles.input} />
                <InputText style={styles.input} />
                <InputText style={styles.input} />
            </View>
            <PurpleRoundBtn text="Confirm" style={styles.btn}/>
        </RoundView>
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
