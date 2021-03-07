import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';
import { shopListItemstyles } from '../../styles/FlatListItemStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import Inventory from '../../models/Inventory';
import { connect } from 'react-redux';
import { setMerchant } from '../../redux/actions/merchant';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    item: Inventory,
    set: (a: Inventory) => void,
    navigation: any,
    index: number
}

const displayRating = (number: number, index: number) => {
    var stars = []
    for(var i=1;i<=5;i++) {
        if(i<=number) {
            stars.push(<MaterialCommunityIcons name="star" color={colors.gold} size={20} key={`${index}${i}`}/>)
        } else {
            stars.push(<MaterialCommunityIcons name="star" color={colors.lightGrey} size={20} key={`${index}${i}`}/>)
        }
    }
    return stars
}

const ShopListItem: React.FC<Props> = ({navigation, item, set, index}) => {
    console.log("data: ", Object.keys(item))
    return (
        <TouchableOpacity style={shopListItemstyles.container} activeOpacity={0.9} onPress={() => {
            AsyncStorage.setItem('@Inventory', item.toJson())
            set(item)
            navigation.navigate('Main', {
                item: item
            })
        }}>
            <View>
                <Image
                    style={shopListItemstyles.shopImage}
                    source={{uri: item.image}}
                />   
            </View>
            {/* <View style={shopListItemstyles.shopInfo}>
                <HeaderText>{item.name}</HeaderText>
                <BodyText>{item.address}</BodyText>
                <View style={{flexDirection: "row"}}>
                {displayRating(item.rating, index)}
                </View>
            </View> */}
        </TouchableOpacity>
    )
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        set: (inventory: Inventory) => dispatch(setMerchant(inventory)),
    }
}

export default connect(null, mapDispatchToProps)(ShopListItem)