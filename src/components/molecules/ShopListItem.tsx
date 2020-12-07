import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native';
import { shopListItemstyles } from '../../styles/FlatListItemStyle'
import { HeaderText, BodyText } from '../atoms/Text'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'
import Merchant from '../../models/Merchant';
import { connect } from 'react-redux';
import { setMerchant } from '../../redux/actions/merchant';

interface Props {
    item: Merchant,
    set: (a: Merchant) => void   
}

const displayRating = (number: number) => {
    for(var i=1;i<=5;i++) {
        if(i<=number) {
            return (
                <MaterialCommunityIcons name="star" color={colors.gold} size={20} />
            )
        } else {
            return (
                <MaterialCommunityIcons name="star" color={colors.lightGrey} size={20} />
            )
        }
    }
}

const ShopListItem: React.FC<Props> = ({item, set}) => {
    return (
        <TouchableOpacity style={shopListItemstyles.container} activeOpacity={0.9} onPress={() => set(item)}>
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
                {() => displayRating(item.rating)}
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
