import React from 'react'
import { TextInput, View } from 'react-native'
import SearchBarStyle from '../../styles/SearchBarStyle'
import Magnify from '../../assets/icons/Magnify'

const SearchBar = ({style, placeholder, value, onChangeText, onFocus, editable}) => {
    return (
        <View style={{ ...SearchBarStyle.background, ...style }}>
            <Magnify />
            <TextInput 
                placeholder={placeholder} 
                style={{flex: 1, fontSize: 15, marginLeft: 10}}
                value={value}
                onChangeText={onChangeText ? (text) => onChangeText(text) : null}
                onFocus={onFocus}
                editable={editable}
            />
        </View>
    )
}

export default SearchBar
