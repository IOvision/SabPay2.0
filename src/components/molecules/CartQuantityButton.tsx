import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ItemQuantityButtonStyle } from '../../styles/FlatListItemStyle'
import { BodyText } from '../atoms/Text'
import colors from '../../assets/colors'
import { connect } from 'react-redux';
import { decItem, incItem } from '../../redux/actions/cart';
import { RootState } from '../../redux/store'
import CartItem from '../../models/CartItem'

export interface Props {
    item: CartItem,
    cartQty: any,
    inc: (id: string, price: number) => any,
    dec: (id: string, price: number) => any
}

const CartQuantityButton: React.FC<Props> = ({item, cartQty, inc, dec}) => {

    const getQty = () => {
        if (cartQty[item.getSelectedId()])
            return cartQty[item.getSelectedId()]
        else
            return 0
    }

    const [qty, setQty] = useState(getQty())

    const onInc = () => {
        inc(item.getSelectedId(), item.price)
        setQty(qty+1)
    }

    const onDec = () => {
        dec(item.getSelectedId(), item.price)
        setQty(qty-1)
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

const mapStateToProps = (state: RootState) => {
    return {
        cartQty: state.cartReducer.qty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: (key: string, price: number) => dispatch(incItem(key, price)),
        dec: (key: string, price: number) => dispatch(decItem(key, price))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartQuantityButton)
