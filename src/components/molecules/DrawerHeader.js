import React from 'react'
import { View, Image } from 'react-native'
import { HeaderText, BodyText } from '../atoms/Text'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import DrawerHeaderStyle from '../../styles/DrawerHeaderStyle'

const DrawerHeader = () => {
    return (
        <View style={DrawerHeaderStyle.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={DrawerHeaderStyle.image} source={{uri: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}} />
                <View style={{marginLeft: 10}}>
                    <HeaderText style={{color: 'white'}}>Santiago D'Souza</HeaderText>
                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="wallet" color="white" size={18} />
                        <BodyText style={{color: 'white', marginLeft: 5}}>Rs. 2000</BodyText>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DrawerHeader
