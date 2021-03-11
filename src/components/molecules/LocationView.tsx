import React, {useState} from 'react'
import {ToastAndroid} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import InputText from '../atoms/InputText'
import { HeaderText } from '../atoms/Text'
import colors from '../../assets/colors'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import User from '../../models/User'
import {putUserData} from '../../requests'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
        if (flat == "" || colony == "" || city == "") return ToastAndroid.show("Enter details", ToastAndroid.SHORT)
        const address = flat + ", " + colony + ", " + city
        user.address.push(address)
        putUserData(user, (err, resp) => {
            AsyncStorage.setItem('@User', JSON.stringify(resp))
        })
        setState("old")
    }
    return (
        <View style={{flex: 1, justifyContent: 'space-between', paddingVertical: 10}}>
            <View style={{paddingHorizontal: 15}}>
                <InputText placeholder="House/Flat number" editable={true} value={flat} onChangeText={setFlat}/>
                <InputText placeholder="Colony/Society/Road" editable={true} value={colony} onChangeText={setColony}/>
                <InputText placeholder="City/State" editable={true} value={city} onChangeText={setCity}/>
            </View>
            <TouchableOpacity style={styles.btnView} onPress={addAddress}>
                <HeaderText style={{color: 'white', fontSize: 18}}>Submit</HeaderText>
            </TouchableOpacity>
        </View>
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
        marginTop: 30,
        backgroundColor: colors.primary,
        padding: 15,
        alignItems: 'center'
    }
})