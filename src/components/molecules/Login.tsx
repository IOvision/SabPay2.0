import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import PurpleRoundBtn from '../atoms/PurpleRoundBtn';
import RoundView from '../atoms/RoundView';
import { HeaderText } from '../atoms/Text'
import InputText from '../atoms/InputText';
import Otp from './Otp';
import { Auth } from 'aws-amplify'
import colors from '../../assets/colors';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import SmsRetriever from 'react-native-sms-retriever'

import { ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/user';
import User from '../../models/User';

export interface Props {
    close: () => void
    setSignedIn: (user: User) => void
}

const Login: React.FC<Props> = ({setSignedIn, close}) => {
    const [state, setState] = useState(0)
    const [phone, setPhone] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    var temp: any
    //Hash - Xq5ZQIU2b5de
    const signUp = async () => {
        try {
            const { user } = await Auth.signUp({
                username: `+91${phone}`,
                password: Date.now().toString()
            })
            startSmsListener()
            console.log(user)
        } catch (error) {
            if (error.code === "UsernameExistsException")
            startSmsListener()
        }
    }

    const startSmsListener = async () => {
        try {
            const registered = await SmsRetriever.startSmsRetriever()
            if (registered) {
                signIn()
                SmsRetriever.addSmsListener(event => {
                    const a = /(\d{4})/g.exec(event.message)[1]
                    SmsRetriever.removeSmsListener()
                    confirmSignIn(a)
                })
            }
        } catch (error) {
            setIsLoading(false)
        }  
    }

    const signIn = async () => {
        setIsLoading(true)
        try {
            temp = await Auth.signIn(`+91${phone}`)
        } catch (error) {
            console.log(error)
        }
    }

    const confirmSignIn = async (otp: string) => {
        try {
            const data = await Auth.sendCustomChallengeAnswer(temp, otp);
            setSignedIn(new User(data.attributes.phone_number))
            close()
        } catch (error) {
            console.log('error', error)
        }
    }

    if(isLoading) {
        return (
            <RoundView style={{ ...styles.container, justifyContent: 'center' }}>
                <ActivityIndicator />
                <HeaderText style={{alignSelf: 'center', marginTop: 10}}>Reading OTP</HeaderText>
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
                        <InputText preText="+91" style={styles.input} placeholder="Enter Mobile Number" value={phone} onChangeText={setPhone} />
                        <PurpleRoundBtn text="Next" onPress={signUp} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        setSignedIn: (user: User) => dispatch(signIn(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        height: 250,
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
