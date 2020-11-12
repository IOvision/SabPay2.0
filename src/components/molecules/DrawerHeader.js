import React from 'react'
import { View, Image } from 'react-native'
import { HeaderText, BodyText } from '../atoms/Text'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import DrawerHeaderStyle from '../../styles/DrawerHeaderStyle'

const DrawerHeader = () => {
    return (
        <View style={DrawerHeaderStyle.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{flex: 1, width: 5, backgroundColor: 'white', alignSelf: 'flex-start', marginLeft: 10, marginTop: 20}} />
                <View style={{marginLeft: 20, marginTop: 10}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="account-circle" color='white' size={24} />
                        <HeaderText style={{color: 'white'}}>Santiago D'Souza</HeaderText>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="phone" color='white' size={24} />
                        <HeaderText style={{color: 'white'}}>967829XXXX</HeaderText>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="wallet" color='white' size={24} />
                        <HeaderText style={{color: 'white'}}>Rs. 2,000</HeaderText>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DrawerHeader
