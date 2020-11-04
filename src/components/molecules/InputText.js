import React from 'react'
import { View, TextInput } from 'react-native'
import InputStyle from '../../styles/InputStyle'

export default InputText = ({placeholder, value, backgroundStyle, onChangeText}) => {
    return (
        <View style={[InputStyle.background, backgroundStyle]}>
            <TextInput 
                style={value == "" || typeof value == 'undefined' ? InputStyle.placeholder : InputStyle.text } 
                value={value}
                placeholder={placeholder}
                onChangeText={(text) => onChangeText(text)}
            />
        </View>
    )
}
