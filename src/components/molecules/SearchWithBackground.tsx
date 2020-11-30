import React, { useState } from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import { HeaderText, BodyText } from '../atoms/Text'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchBar from '../atoms/SearchBar'

const {width} = Dimensions.get('window')

export interface Props {
    navigation: any,
    home: boolean,
    name: string,
    address: string,
}

const SearchWithBackground: React.FC<Props> = ({navigation, home, name, address}) => {
    const [textHeight, setTextHeight] = useState(0)
    const height = home ? 125 + textHeight : 135
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
                        <View onLayout={
                            (event) => {
                                var { height} = event.nativeEvent.layout;
                                setTextHeight(height)
                            }
                        }>
                            <HeaderText style={{color: "white", fontSize: 20}}>{name}</HeaderText>
                            <BodyText style={{color: "white", fontSize: 13}}>{address}</BodyText>
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
