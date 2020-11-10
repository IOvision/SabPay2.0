import React from 'react'
import { TextInput, View } from 'react-native'
import SearchBarStyle from '../../styles/SearchBarStyle'
import Magnify from '../../assets/icons/Magnify'

const SearchBar = ({style, placeholder, value, onChangeText, onFocus}) => {
    return (
        <View style={{ ...SearchBarStyle.background, ...style }}>
            <Magnify />
            <TextInput 
                placeholder={placeholder} 
                style={{flex: 1}}
                value={value}
                onChangeText={(text) => onChangeText(text)}
                onFocus={onFocus}
            />
        </View>
    )
}

export default SearchBar
