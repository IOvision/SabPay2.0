import React from 'react'
import { TextInput, View } from 'react-native'
import SearchBarStyle from '../../styles/SearchBarStyle'
import Magnify from '../../assets/icons/Magnify'

const SearchBar = ({style, placeholder, value, onChangeText}) => {
    return (
        <View style={{ ...SearchBarStyle.background, ...style }}>
            <Magnify />
            <TextInput 
                placeholder={placeholder} 
                style={{flex: 1}}
                value={value}
                onChangeText={(text) => onChangeText(text)}
            />
        </View>
    )
}

export default SearchBar
