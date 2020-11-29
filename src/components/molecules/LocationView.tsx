import React from 'react'
import RoundView from '../atoms/RoundView'
import { View, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import InputText from '../atoms/InputText'
import { CaptionText, HeaderText, BodyText } from '../atoms/Text'
import PurpleRoundButton from '../atoms/PurpleRoundBtn'
import colors from '../../assets/colors'
 
const AddressInputView: React.FC = () => {
    return (
        <RoundView>
            <CaptionText>Location</CaptionText>
            <BodyText>Shakti Viahr Colony, Kolakusma Road, Chanakya Nagar Dhanbad, Jharkhand 828127, India</BodyText>
            <View style={styles.text}>
                <HeaderText style={styles.text}>Use Current Location</HeaderText>
            </View>
            <InputText placeholder="House/Flat number"/>
            <InputText placeholder="Colony/Society/Road"/>
            <InputText placeholder="City/State"/>
            <View style={styles.text}>
                <HeaderText style={styles.text}>Use Current Location</HeaderText>
            </View>
            <View style={styles.btnView}>
                <PurpleRoundButton text="Confirm" />
            </View>
        </RoundView>
    )
}

export default AddressInputView

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
        alignItems: "flex-end"
    }
})