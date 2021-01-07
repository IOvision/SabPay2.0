import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ToastAndroid, View } from 'react-native'
import { connect } from 'react-redux'
import InputText from '../../components/atoms/InputText'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import User from '../../models/User'
import { signIn } from '../../redux/actions/user'
import { putUserData } from '../../requests'

export interface Props {
    navigation: any,
    setSignedIn : (user: User) => void
}

const Signup: React.FC<Props> = ({navigation, setSignedIn}) => {
    const [username, setUsername] = useState("Rakshit Singh")
    const [house, setHouse] = useState("M-473, Kanpur Road")
    const [colony, setColony] = useState("Ashiyana")
    const [city, setCity] = useState("Lucknow")

    const handlePress = () => {
        var phoneNumber = "+917084552191"
        if (house == "" || colony == "" || city == "") return ToastAndroid.show("Enter details", ToastAndroid.SHORT)
        const address = [`${house}, ${colony}, ${city}`]
        const data = {
            username,
            address,
            phoneNumber
        }
        var user = new User(data)
        putUserData(user, (err, resp) => {
            AsyncStorage.setItem('@User', JSON.stringify(resp))
            setSignedIn(resp)
        })
    }

    return (
        <View style={{padding: 20, backgroundColor: "white", flex: 1}}>
            <InputText placeholder={"Name"} value={username} onChangeText={setUsername}/>
            <InputText placeholder={"House/Flat number"} value={house} onChangeText={setHouse}/>
            <InputText placeholder={"Colony/ Society/ Road"} value={colony} onChangeText={setColony}/>
            <InputText placeholder={"City/State"} value={city} onChangeText={setCity}/>
            <PurpleRoundBtn text={"Save"} onPress={handlePress} style={{alignSelf: "center", marginTop: 20}}/>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignedIn: (user: User) => dispatch(signIn(user))
    }
}

export default connect(null, mapDispatchToProps)(Signup)
