import React from 'react'
import RoundView from '../atoms/RoundView'
import InputText from '../atoms/InputText'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'
import { StyleSheet, View } from 'react-native'
import { CaptionText } from '../atoms/Text'

function ProfileEdit() {
    return (
        <RoundView>
            <View style={styles.headerTextView}>
                <CaptionText>Your Profile</CaptionText>
            </View>
            <InputText placeholder="Enter Name" />
            <InputText placeholder="Enter Email" />
            <InputText placeholder="Enter Phone Number" />
            <InputText placeholder="Enter Address" />
            <PurpleRoundBtn style={styles.btnView} text="Save" />
        </RoundView>
    )
}

export default ProfileEdit

const styles = StyleSheet.create({
    headerTextView: {
        margin: 20,
        alignItems: "center",
    },
    btnView: {
        marginTop: 20,
        alignSelf: "center",
    }
})