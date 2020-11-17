import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'

import SearchBar from '../atoms/SearchBar'

const {width} = Dimensions.get('window')
const SearchWithBackground = ({navigation}) => {
    return (
        <View>
            <View style={{
                backgroundColor: colors.primary, 
                width: width/2,
                height: 130,
                marginTop: -75,
                borderRadius: 50,
                position: 'absolute',
                alignSelf:'center',
                transform: [
                    {scaleX: 2.5}
                ]
            }} />
            <TouchableOpacity onPress={() => navigation.navigate('CategoryList')}>
                <SearchBar editable={false} placeholder="What are you looking for?" style={{marginHorizontal: 20, marginTop: 30, marginBottom: 5}} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchWithBackground
