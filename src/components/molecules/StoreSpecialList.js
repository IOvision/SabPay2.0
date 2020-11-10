import React from 'react'
import { View, Text, FlatList } from 'react-native'
import StoreSpecialListItem from '../molecules/StoreSpecialListItem'
import randomColor, { colorLength } from '../../assets/randomColor'

export default function StoreSpecialList({object}) {
    return (
        <FlatList
            horizontal
            data={object}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
            return <StoreSpecialListItem image={item.image} title={item.title} price={item.price} color={randomColor[(index % colorLength) + 1]}/>
        }}/>
    )
}