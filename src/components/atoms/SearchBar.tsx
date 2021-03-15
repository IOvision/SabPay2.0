import React from 'react'
import { NativeSyntheticEvent, StyleProp, TextInput, TextInputFocusEventData, TextStyle, View } from 'react-native'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchBarStyle from '../../styles/SearchBarStyle'


export interface Props {
    style: StyleProp<TextStyle>,
    placeholder: string,
    value?: string,
    onChangeText?: (text: string) => void,
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    editable: boolean
    inputRef?: any
}

const SearchBar: React.FC<Props> = ({style, placeholder, value, onChangeText, onFocus, editable, inputRef}) => {
    return (
        <View style={{ ...SearchBarStyle.background, ...(style as object) }}>
            {/* <MaterialCommunityIcons name="search" color="white" size={20} /> */}
            <TextInput 
                placeholder={placeholder} 
                ref={inputRef}
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
