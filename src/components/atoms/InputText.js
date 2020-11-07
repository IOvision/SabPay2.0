import React from 'react'
import { View, TextInput } from 'react-native'
import InputStyle from '../../styles/InputStyle.js'

function InputText({placeholder, value, backgroundStyle, onChangeText, style}) {
    return (
        <View style={[InputStyle.background, backgroundStyle, style]}>
            <TextInput 
                style={value == "" || typeof value == 'undefined' ? InputStyle.placeholder : InputStyle.text } 
                value={value}
                placeholder={placeholder}
                onChangeText={(text) => onChangeText(text)}
            />
         </View>
    )
}

export default InputText