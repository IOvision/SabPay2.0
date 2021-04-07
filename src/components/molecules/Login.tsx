import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import PurpleRoundBtn from '../atoms/PurpleRoundBtn';
import RoundView from '../atoms/RoundView';
import { BodyText, HeaderText } from '../atoms/Text'
import InputText from '../atoms/InputText';
import Otp from './Otp';
import { Auth } from 'aws-amplify'
import colors from '../../assets/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

import { ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/user';
import User from '../../models/User';
import { getUserData } from '../../requests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    navigation: any,
    close: () => void
    setSignedIn: (user: User) => void
}

const Login: React.FC<Props> = ({navigation, setSignedIn, close}) => {
    const [state, setState] = useState(0)
    const [phone, setPhone] = useState("")
    const [user, setUser] = useState('null')
    const [otp, setOTP] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    var temp: any

    //Hash - Xq5ZQIU2b5de

    const validateNumber = (number: string) => {
        return number.length == 10;
    };

    const signUp = async () => {
        if(validateNumber(phone)) {
            try {
                await Auth.signUp({
                    username: `+91${phone}`,
                    password: Date.now().toString()
                })
                signIn()
            } catch (error) {
                if (error.code === "UsernameExistsException")
                    signIn()
            }
        } else {
            setError(true)
        }
    }

    // const startSmsListener = async () => {
    //     try {
    //         setReadingOtp(true)
    //         signIn()
    //         const registered = await SmsRetriever.startSmsRetriever()
    //         if (registered) {
    //             SmsRetriever.addSmsListener(event => {
    //                 console.log(event)
    //                 const a = /(\d{4})/g.exec(event.message)[1]
    //                 SmsRetriever.removeSmsListener()
    //                 confirmSignIn(a)
    //             })
    //         }
    //     } catch (error) {
    //         setReadingOtp(false)
    //     }  
    // }

    const signIn = async () => {
        try {
            temp = await Auth.signIn(`+91${phone}`)
            setUser(temp)
            setState(1)
        } catch (error) {
            console.log(error)
        }
    }

    const confirmSignIn = async (otp: string) => {
        setIsLoading(true)
        try {
            const data = await Auth.sendCustomChallengeAnswer(user, otp);
            getUserData(phone, data.signInUserSession.idToken.jwtToken, (err, resp) => {
                if (err) {
                    if(err === 'signup'){
                        navigation.push('Signup', {
                            phone: phone
                        })
                    }
                }
                AsyncStorage.setItem('@User', JSON.stringify(resp))
                setSignedIn(resp)
            })
            close()
        } catch (error) {
            console.log('error', error)
            setIsLoading(false)
        }
    }

    // if(readingOtp) {
    //     return (
    //         <RoundView style={{ ...styles.container, justifyContent: 'center' }}>
    //             <ActivityIndicator />
    //             <HeaderText style={{alignSelf: 'center', marginTop: 10}}>Reading OTP</HeaderText>
    //             <TouchableOpacity>
    //                 <BodyText style={{fontSize: 14, alignSelf: 'flex-end', marginTop: 10, color: '#8021EB'}}>Enter OTP Manually</BodyText>
    //             </TouchableOpacity>
    //         </RoundView>
    //     )
    // }

    if(isLoading) {
        return (
            <RoundView style={{ ...styles.container, justifyContent: 'center' }}>
                <ActivityIndicator />
            </RoundView>
        )
    }

    return (
        <RoundView style={styles.container}>
            {
                state === 0 ? (
                    <View>
                        <View>
                            <HeaderText>Enter Phone number to continue: </HeaderText>
                        </View>
                        <InputText preText="+91" style={styles.input} placeholder="Enter Mobile Number" value={phone} onChangeText={setPhone} editable={true} error={error ? "Invalid" : ""} keyboardType={"phone-pad"}/>
                        <PurpleRoundBtn text="Next" onPress={signUp} />
                    </View>
                ) : (
                    null
                )
            }
            {
                state === 1 ? (
                    <View>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => setState(0)}>
                            <Icons name="arrow-left" color="black" size={18} />
                            <HeaderText style={{marginLeft: 5, fontSize: 16}}>Enter the verification code:</HeaderText>
                        </TouchableOpacity>
                        <Otp value={otp} setValue={setOTP} />
                        <PurpleRoundBtn style={{alignSelf: 'center', width: 100, borderRadius: 4}} mode="gradient" text="Next" onPress={() => confirmSignIn(otp)} />
                    </View>
                ) : (
                    null
                )
            }
            {
                state === 2 ? (
                    <View>
                        <HeaderText>Enter your name: </HeaderText>
                        <InputText style={styles.input} placeholder="Enter Name" editable={true} keyboardType={"phone-pad"}/>
                        <PurpleRoundBtn text="Confirm" style={styles.btn} />
                    </View>
                ) : (
                    null
                )
            }
        </RoundView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignedIn: (user: User) => dispatch(signIn(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        height: 250,
        padding: 20,
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
