import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppbarStyle from '../../styles/AppbarStyle'

const Appbar = ({image}) => {
    return (
        <View style={[AppbarStyle.container]}>
            <Image source={image} style={AppbarStyle.logo} />
        </View>
    )
}

export default Appbar