import React from 'react'
import { View, Dimensions } from 'react-native'
import colors from '../../assets/colors'

import SearchBar from '../atoms/SearchBar'

const {width} = Dimensions.get('window')
const SearchWithBackground = () => {
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
            <SearchBar placeholder="What are you looking for?" style={{marginHorizontal: 20, marginTop: 30, marginBottom: 5}} onChangeText={(text) => console.log(text)} />
        </View>
    )
}

export default SearchWithBackground
