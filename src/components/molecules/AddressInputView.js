import React from 'react'
import RoundView from '../atoms/RoundView'
import { View, Text, StyleSheet } from 'react-native'
import InputText from '../atoms/InputText'
import { HeaderText } from '../atoms/Text'
import PurpleRoundButton from '../atoms/PurpleRoundBtn'
 
function AddressInputView() {
    return (
        <RoundView>
            <InputText placeholder="House/Flat number"/>
            <InputText placeholder="Colony/Society/Road"/>
            <InputText placeholder="City/State"/>
            <View style={styles.textView}>
                <HeaderText style={styles.text}>Use Current Location</HeaderText>
            </View>
            <View style={styles.btnView}>
                <PurpleRoundButton text="Confirm" />
            </View>
        </RoundView>
    )
}

export default AddressInputView

const styles = StyleSheet.create({
    text: {
        color: "purple",
        fontSize: 20,
        marginTop: 15
    },
    btnView: {
        alignItems: "flex-end"
    }
})
