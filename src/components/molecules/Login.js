import React from 'react'
import { StyleSheet } from 'react-native';
import PurpleRoundBtn from '../atoms/PurpleRoundBtn';
import RoundView from '../atoms/RoundView';
import { HeaderText } from '../atoms/Text.js'
import InputText from '../atoms/InputText';
import Otp from './Otp';

function Login() {
    return (
        <RoundView style={styles.container}>
            <HeaderText>Sign-Up/Log-in</HeaderText>
            <InputText style={styles.input} placeholder="Enter Mobile Number"/>
            <Otp />
            <InputText style={styles.input} placeholder="Enter Name"/>
            <PurpleRoundBtn text="Next" />
            <PurpleRoundBtn text="Confirm" style={styles.btn}/>
        </RoundView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    input: {
        marginTop: 20
    },
    btn: {
        marginTop: 20,
        display: "flex",
        alignSelf: "flex-end",
        marginLeft: 20
    }
})
