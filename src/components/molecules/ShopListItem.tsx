import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';
import { shopListItemstyles } from '../../styles/FlatListItemStyle'
import { HeaderText, BodyText } from '../atoms/Text'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import Merchant from '../../models/Merchant';
import { connect } from 'react-redux';
import { setMerchant } from '../../redux/actions/merchant';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
    item: Merchant,
    set: (a: Merchant) => void,
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
    return (
        <TouchableOpacity style={shopListItemstyles.container} activeOpacity={0.9} onPress={() => {
            AsyncStorage.setItem('@Merchant', item.toJson())
            set(item)
            navigation.navigate('Main')
        }}>
            <View>
                <Image
                    style={shopListItemstyles.shopImage}
                    source={{uri: item.image}}
                />   
            </View>
            <View style={shopListItemstyles.shopInfo}>
                <HeaderText>{item.name}</HeaderText>
                <BodyText>{item.address}</BodyText>
                <View style={{flexDirection: "row"}}>
                {displayRating(item.rating, index)}
                </View>
            </View>
        </TouchableOpacity>
    )
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        set: (merchant: Merchant) => dispatch(setMerchant(merchant)),
    }
}

export default connect(null, mapDispatchToProps)(ShopListItem)