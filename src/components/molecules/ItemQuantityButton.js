import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ItemQuantityButtonStyle } from '../../styles/FlatListItemStyle'
import { BodyText, HeaderText } from '../atoms/Text'
import colors from '../../assets/colors'

const ItemQuantityButton = ({qty, setQty}) => {

    if (qty === 0) {
        return (
            <LinearGradient style={{justifyContent: 'center', borderRadius: 10}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                <TouchableOpacity style={{paddingHorizontal: 15}} onPress={() => setQty(1)} activeOpacity={0.9}>
                    <HeaderText style={{color: 'white'}}>Add</HeaderText>
                </TouchableOpacity>
            </LinearGradient>
        )
    }

    return (
        <View style={ItemQuantityButtonStyle.itemQtyView}>
            <View style={ItemQuantityButtonStyle.itemQtyIncrease}>
                <LinearGradient style={{borderRadius: 5}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                    <TouchableOpacity style={ItemQuantityButtonStyle.touchableForIncDec} onPress={() => setQty(qty + 1)} activeOpacity={0.9}>
                        <MaterialCommunityIcons name="plus" color={colors.white} size={16} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={ItemQuantityButtonStyle.itemQty}>
                <BodyText style={{backgroundColor: colors.mediumGrey, width: '100%', textAlign: 'center'}}>{qty}</BodyText>
            </View>
            <View style={ItemQuantityButtonStyle.itemQtyDecrease}>
                <LinearGradient style={{borderRadius: 5}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                    <TouchableOpacity style={ItemQuantityButtonStyle.touchableForIncDec} onPress={() => setQty(qty - 1)} activeOpacity={0.9}>
                        <MaterialCommunityIcons name="minus" color={colors.white} size={16} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )
}

export default ItemQuantityButton
