import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import PurpleRoundBtn from '../atoms/PurpleRoundBtn';
import RoundView from '../atoms/RoundView';
import { HeaderText } from '../atoms/Text.js'
import InputText from '../atoms/InputText';
import Otp from './Otp';
import { Platform, TouchableOpacity } from "react-native";
import { TouchableOpacity as RNGHTouchableOpacity } from "react-native-gesture-handler";
import { Auth } from 'aws-amplify'
import colors from '../../assets/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { test } from '../../requests'

function Touch({onPress, children}) {
    if (Platform.OS === "android") {
        return (
          <RNGHTouchableOpacity onPress={onPress}>{children}</RNGHTouchableOpacity>
        );
    }
    
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};


function Login() {
    const [state, setState] = useState(0)
    const [phone, setPhone] = useState(null)
    const [code, setCode] = useState(null)

    const signIn = async () => {
        try {
            const { user } = await Auth.signUp({
                username: "+917084552191",
                password: "226012rak",
                attributes: {
                    phone_number: "+917084552191",
                    email: "rakshit.lko@gmail.com"
                }
            })
            console.log(user)
        } catch (error) {
            console.log("Error signing up", error)
        }
    }

    const confirmSignUp = async () => {
        try {
            await Auth.confirmSignUp(phone, code);
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <RoundView style={styles.container}>
            {
                state === 0 ? (
                    <View>
                        <View>
                            
                            <HeaderText>Enter Phone number to continue: </HeaderText>
                        </View>
                        <InputText style={styles.input} placeholder="Enter Mobile Number"/>
                        <PurpleRoundBtn text="Next" onPress={test} />
                    </View>
                ) : (
                    null
                )
            }
            {
                state === 1 ? (
                    <View>
                        <View>
                            <Icons name="arrow-left" color="black" size={18} />
                            <HeaderText>Enter the otp: </HeaderText>
                        </View>
                        <Otp />
                        <PurpleRoundBtn text="Next" />
                    </View>
                ) : (
                    null
                )
            }
            {
                state === 2 ? (
                    <View>
                        <HeaderText>Enter your name: </HeaderText>
                        <InputText style={styles.input} placeholder="Enter Name"/>
                        <PurpleRoundBtn text="Confirm" style={styles.btn} />
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
        padding: 40,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 11, // Android,
        borderWidth: 1,
        borderColor: colors.mediumGrey
    },
    input: {
        marginTop: 20,
        marginBottom: 20,
    },
    btn: {
        display: "flex",
        alignSelf: "flex-end",
        marginLeft: 20,
    }
})
