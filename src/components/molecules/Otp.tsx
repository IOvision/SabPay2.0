import React from 'react'
import { StyleSheet, View } from 'react-native';
import InputText from '../atoms/InputText';

export interface Props {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Otp: React.FC<Props> = (props) => {
    return (
        <View style={styles.inputView}>
            <InputText placeholder="OTP" style={styles.input} value={props.value} onChangeText={props.setValue} editable={true} keyboardType={"numeric"}/>
        </View>
    )
}

export default Otp

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    inputView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20
    },
    input: {
        width: 60,
        marginTop: 20,
        marginHorizontal: 10
    },
    btn: {
        marginTop: 20,
        display: "flex",
        alignSelf: "flex-end",
        marginLeft: 20
    }
})
