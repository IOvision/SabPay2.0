import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ItemQuantityButtonStyle } from '../../styles/FlatListItemStyle'
import { BodyText, HeaderText } from '../atoms/Text'
import colors from '../../assets/colors'
import { connect } from 'react-redux';
import { addItem, decItem, incItem } from '../../redux/actions/cart.js';

export interface Props {
    item: any,
    cartQty: any,
    add: any,
    inc: any,
    dec: any
}

const ItemQuantityButton: React.FC<Props> = ({item, cartQty, add, inc, dec}) => {

    const getQty = () => {
        if (cartQty[item.key])
            return cartQty[item.key]
        else
            return 0
    }

    const [qty, setQty] = useState(getQty())

    const onAdd = () => {
        add(item.key, item)
        setQty(1)
    }

    const onInc = () => {
        inc(item.key)
        setQty(qty+1)
    }

    const onDec = () => {
        dec(item.key)
        setQty(qty-1)
    }


    if (qty === 0) {
        return (
            <LinearGradient style={{justifyContent: 'center', borderRadius: 10}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                <TouchableOpacity style={{paddingHorizontal: 15}} onPress={onAdd} activeOpacity={0.9}>
                    <HeaderText style={{color: 'white'}}>Add</HeaderText>
                </TouchableOpacity>
            </LinearGradient>
        )
    }

    return (
        <View style={ItemQuantityButtonStyle.itemQtyView}>
            <View style={ItemQuantityButtonStyle.itemQtyIncrease}>
                <LinearGradient style={{borderRadius: 5}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                    <TouchableOpacity style={ItemQuantityButtonStyle.touchableForIncDec} onPress={onInc} activeOpacity={0.9}>
                        <MaterialCommunityIcons name="plus" color={colors.white} size={16} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={ItemQuantityButtonStyle.itemQty}>
                <BodyText style={{backgroundColor: colors.mediumGrey, width: '100%', textAlign: 'center'}}>{qty}</BodyText>
            </View>
            <View style={ItemQuantityButtonStyle.itemQtyDecrease}>
                <LinearGradient style={{borderRadius: 5}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
                    <TouchableOpacity style={ItemQuantityButtonStyle.touchableForIncDec} onPress={onDec} activeOpacity={0.9}>
                        <MaterialCommunityIcons name="minus" color={colors.white} size={16} />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        cartQty: state.cartReducer.qty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (key, item) => dispatch(addItem(key, item)),
        inc: (key) => dispatch(incItem(key)),
        dec: (key) => dispatch(decItem(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemQuantityButton)