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
    setSignedIn : (user: User) => void,
    route: any
}

const Signup: React.FC<Props> = ({navigation, setSignedIn, route}) => {
    const [username, setUsername] = useState("")
    const [house, setHouse] = useState("")
    const [colony, setColony] = useState("")
    const [city, setCity] = useState("")

    const handlePress = () => {
        var phoneNumber = route.params.phone
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
            <InputText placeholder={"Name"} value={username} onChangeText={setUsername} editable={true}/>
            <InputText placeholder={"House/Flat number"} value={house} onChangeText={setHouse} editable={true}/>
            <InputText placeholder={"Colony/ Society/ Road"} value={colony} onChangeText={setColony} editable={true}/>
            <InputText placeholder={"City/State"} value={city} onChangeText={setCity} editable={true}/>
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
