import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import PurpleRoundBtn from '../atoms/PurpleRoundBtn';
import RoundView from '../atoms/RoundView';
import { HeaderText } from '../atoms/Text.js'
import InputText from '../atoms/InputText';
import Otp from './Otp';
import { Platform, TouchableOpacity } from "react-native";
import { TouchableOpacity as RNGHTouchableOpacity } from "react-native-gesture-handler";

function Touch({onPress, children}) {
    if (Platform.OS === "android") {
        return (
          <RNGHTouchableOpacity onPress={onPress}>{children}</RNGHTouchableOpacity>
        );
    }
    
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};


function Login() {
    const [state, setState] = useState("phone")
    return (
        <RoundView style={styles.container}>
            <HeaderText>Sign-Up/Log-in</HeaderText>
            {
                state === "phone" ? (
                    <Touch onPress={() => setState("otp")}>
                        <View>
                            <InputText style={styles.input} placeholder="Enter Mobile Number"/>
                            <PurpleRoundBtn text="Next" />
                        </View>
                    </Touch>
                ) : (
                    null
                )
            }
            {
                state === "otp" ? (
                    <Touch onPress={() => setState("name")}>
                        <View>
                            <Otp />
                            <PurpleRoundBtn text="Next" />
                        </View>
                    </Touch>
                ) : (
                    null
                )
            }
            {
                state === "name" ? (
                    <Touch onPress={() => console.log("testing")}>
                        <View>
                            <InputText style={styles.input} placeholder="Enter Name"/>
                            <PurpleRoundBtn text="Confirm" style={styles.btn} />
                        </View>
                    </Touch>
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
        borderRadius: 20,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
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
