import React from 'react'
import RoundView from '../atoms/RoundView'
import InputText from '../atoms/InputText'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'
import { StyleSheet, View } from 'react-native'
import { HeaderText } from '../atoms/Text'

const ProfileEdit = () => {
    return (
        <RoundView>
            <View style={styles.headerTextView}>
                <HeaderText style={styles.headerText}>Your Profile</HeaderText>
            </View>
            <InputText placeholder="Enter Name" editable={true}/>
            <InputText placeholder="Enter Email" editable={true}/>
            <InputText placeholder="Enter Phone Number" editable={false}/>
            <InputText placeholder="Enter Address" editable={true}/>
            <PurpleRoundBtn style={styles.btnView} text="Save" />
        </RoundView>
    )
}

export default ProfileEdit

const styles = StyleSheet.create({
    headerTextView: {
      margin: 20,
      marginTop: 0,
      alignItems: "center",
    },
    headerText: {
      fontSize: 24,
      color: 'grey'
    },
    btnView: {
      marginTop: 20,
      marginBottom: 50,
      alignSelf: "center",
    }
})