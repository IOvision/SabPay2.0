import React, {useState} from 'react'
import RoundView from '../atoms/RoundView'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import InputText from '../atoms/InputText'
import { CaptionText, BodyText } from '../atoms/Text'
import PurpleRoundButton from '../atoms/PurpleRoundBtn'
import colors from '../../assets/colors'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import User from '../../models/User'
import {putUserData} from '../../requests'

export interface Props {
    user: User,
    state: string, 
    setState: Function
}
 
const AddressInputView: React.FC<Props> = ({user, state, setState}) => {
    const [flat, setFlat] = useState("")
    const [colony, setColony] = useState("")
    const [city, setCity] = useState("")
    const addAddress = () => {
        const address = flat + ", " + colony + ", " + city
        user.address.push(address)
        putUserData(user, (err, resp) => {
            AsyncStorage.setItem('@User', JSON.stringify(resp))
        })
        setState("old")
    }
    return (
        <RoundView>
            <CaptionText>Location</CaptionText>
            <BodyText>Add new address</BodyText>
            <InputText placeholder="House/Flat number" editable={true} value={flat} onChangeText={setFlat}/>
            <InputText placeholder="Colony/Society/Road" editable={true} value={colony} onChangeText={setColony}/>
            <InputText placeholder="City/State" editable={true} value={city} onChangeText={setCity}/>
            <View style={styles.btnView}>
                <PurpleRoundButton text="Confirm" onPress={addAddress}/>
            </View>
        </RoundView>
    )
}

const mapStateToProps = (state: RootState) => {
  return {
      user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(AddressInputView)


interface Style {
    text: TextStyle,
    btnView: ViewStyle
}

const styles = StyleSheet.create<Style>({
    text: {
        color: colors.primary,
        fontSize: 20,
        marginTop: 15
    },
    btnView: {
        alignItems: "flex-end",
        marginTop: 30
    }
})