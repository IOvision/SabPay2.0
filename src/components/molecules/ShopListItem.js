import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { shopListItemstyles } from '../../styles/FlatListItem.js'
import { HeaderText, BodyText } from '../atoms/Text'

function ShopListItem() {
    return (
        <View style={shopListItemstyles.container}>
            <View>
                <Image
                    style={shopListItemstyles.shopImage}
                    source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsproutsocial.com%2Finsights%2Fsocial-media-image-sizes-guide%2F&psig=AOvVaw1YzM-RjPTcgQGMXHXbVTtv&ust=1604558173182000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiwjZKj6OwCFQAAAAAdAAAAABAD'}}
                />   
            </View>
            <View style={shopListItemstyles.shopInfo}>
                <HeaderText>Abhishek General Store</HeaderText>
                <BodyText>Hari Mandir, Park Market, Hirapur, Dhanbad</BodyText>
                <Text>*****</Text>
            </View>
        </View>
    )
}

export default ShopListItem
