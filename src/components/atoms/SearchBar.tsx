import React from 'react'
import { NativeSyntheticEvent, StyleProp, TextInput, TextInputFocusEventData, TextStyle, View } from 'react-native'
import SearchBarStyle from '../../styles/SearchBarStyle'
import Magnify from '../../assets/icons/Magnify'

export interface Props {
    style: StyleProp<TextStyle>,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => null,
    onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    editable: boolean
}

const SearchBar: React.FC<Props> = ({style, placeholder, value, onChangeText, onFocus, editable}) => {
    return (
        <View style={{ ...SearchBarStyle.background, ...(style as object) }}>
            <Magnify />
            <TextInput 
                placeholder={placeholder} 
                style={{flex: 1, fontSize: 15, marginLeft: 10}}
                value={value}
                onChangeText={(text) => onChangeText(text)}
                onFocus={onFocus}
                editable={editable}
            />
        </View>
    )
}

export default SearchBar
