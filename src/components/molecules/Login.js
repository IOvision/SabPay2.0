import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import PurpleRoundBtn from '../atoms/PurpleRoundBtn';
import RoundView from '../atoms/RoundView';
import { HeaderText } from '../atoms/Text.js'
import InputText from '../atoms/InputText';
import Otp from './Otp';

function Login() {
    const [state, setState] = useState("phone")
    return (
        <RoundView style={styles.container}>
            <HeaderText>Sign-Up/Log-in</HeaderText>
            {
                state == "phone" ? (
                    <View>
                        <InputText style={styles.input} placeholder="Enter Mobile Number"/>
                        <PurpleRoundBtn text="Next" />
                    </View>
                ) : (
                    null
                )
            }
            {
                state == "otp" ? (
                    <View>
                        <Otp />
                        <PurpleRoundBtn text="Next" />
                    </View>
                ) : (
                    null
                )
            }
            {
                state == "name" ? (
                    <View>
                        <InputText style={styles.input} placeholder="Enter Name"/>
                        <PurpleRoundBtn text="Confirm" style={styles.btn}/>
                    </View>
                ) : (
                    null
                )
            }
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
