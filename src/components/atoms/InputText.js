import React from 'react'
import { View, TextInput, Text } from 'react-native'
import InputStyle from '../../styles/InputStyle.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function InputText({placeholder, value, backgroundStyle, onChangeText, style, error, preText}) {
    return (
        <View style={
            error ? 
            [InputStyle.background, InputStyle.error, backgroundStyle, style]
            :
            [InputStyle.background, backgroundStyle, style]
        }>
            <View style={{flexShrink: 1, flex: 1, flexDirection: 'row'}}>
                <Text style={{ ...InputStyle.text, alignSelf: 'center', paddingRight: 0}}>{preText}</Text>
                <TextInput 
                    style={value == "" || typeof value == 'undefined' ? InputStyle.placeholder : InputStyle.text } 
                    value={value}
                    placeholder={placeholder}
                    onChangeText={(text) => onChangeText(text)}
                />
            </View>
            <View style={{alignSelf: 'center'}}>
            {
                error ? (
                    <Icon name="alert-circle-outline" size={24} color="red" />
                ) : (
                    null
                )
            }
            </View>
         </View>
    )
}

export default InputText