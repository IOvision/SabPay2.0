import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import { HeaderText, BodyText } from '../atoms/Text'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchBar from '../atoms/SearchBar'

const {width} = Dimensions.get('window')
const SearchWithBackground = ({navigation, home}) => {
    const height = home ? 200 : 135
    return (
        <View>
            <View style={{
                backgroundColor: colors.primary, 
                width: width/2,
                height: height,
                marginTop: -75,
                borderRadius: 50,
                position: 'absolute',
                alignSelf:'center',
                transform: [
                    {scaleX: 2.5}
                ]
            }} />
            {
                home ? (
                    <View style={{display: "flex", alignItems: "flex-start", marginTop: 10, marginBottom: -20, paddingHorizontal: 20, flexDirection: "row"}}>
                        <View>
                            <HeaderText style={{color: "white", fontSize: 20}}>Abhishek General Store</HeaderText>
                            <BodyText style={{color: "white", fontSize: 13}}>3A Kachari Inc3, Plot no 26/A, H, park, Kanchalmarath Mandal, RR Dist 500005</BodyText>
                        </View>
                        <MaterialCommunityIcons name="pen" color={colors.white} size={20} style={{marginTop: 5}} onPress={() => navigation.navigate("Change Store")}/>
                    </View>
                ) : (
                    null
                )
            }
            <TouchableOpacity onPress={() => navigation.navigate('CategoryList')}>
                <SearchBar editable={false} placeholder="What are you looking for?" style={{marginHorizontal: 20, marginTop: 30, marginBottom: 5}} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchWithBackground
