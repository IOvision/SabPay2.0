import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import RoundView from '../atoms/RoundView'
import { HeaderText, BodyText } from '../atoms/Text'
import { storeListItemStyle } from '../../styles/FlatListItemStyle'
import colors from '../../assets/colors'
import ItemQuantityButton from './ItemQuantityButton';
import Item from '../../models/Item'

export interface Props {
    item: Item,
    navigation: any
}

const StoreItemListItem: React.FC<Props> = ({item, navigation}) => {
    
    const [selected, setSelected] = useState(0)
    
    const children = () => {
        return item.child.map((element) => {
            return (
                <TouchableOpacity 
                    key={element.id}
                    style={element.key == selected ? [storeListItemStyle.itemSize, {borderColor: colors.primary}] : storeListItemStyle.itemSize}
                    onPress={() => setSelected(element.key)}
                >
                    <BodyText>{element.name}</BodyText>
                </TouchableOpacity>
            )
        })
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate("ItemDetails", {
            item: item
        })} activeOpacity={0.9}>
            <RoundView style={storeListItemStyle.container}>
                <View style={storeListItemStyle.itemImageView}>
                    <Image 
                        style={storeListItemStyle.itemImage}
                        source={{uri: item.image}}
                    />
                </View>
                <View style={storeListItemStyle.itemDetailsView}>
                    <HeaderText>{item.name}</HeaderText>
                    <BodyText>Rs. {item.child[selected].price}</BodyText>
                    <View style={storeListItemStyle.itemSizeAndQtyView}>
                        <View style={{flexDirection: 'row'}}>
                        {children()}
                        </View>
                        <ItemQuantityButton item={item} />
                    </View>
                </View>
            </RoundView>
        </TouchableOpacity>
    )
}

export default StoreItemListItem
