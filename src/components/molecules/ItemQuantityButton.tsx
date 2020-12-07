import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ItemQuantityButtonStyle } from '../../styles/FlatListItemStyle'
import { BodyText, HeaderText } from '../atoms/Text'
import colors from '../../assets/colors'
import { connect } from 'react-redux';
import { addItem, decItem, incItem } from '../../redux/actions/cart';
import Item from '../../models/Item'
import { RootState } from '../../redux/store'
import CartItem from '../../models/CartItem'

export interface Props {
    item: Item,
    selected: number,
    cartQty: any,
    add: (item: CartItem, selected: number) => any,
    inc: (id: string) => any,
    dec: (id: string) => any
}

const ItemQuantityButton: React.FC<Props> = ({item, selected, cartQty, add, inc, dec}) => {

    const getQty = () => {
        if (cartQty[item.getSelectedId(selected)])
            return cartQty[item.getSelectedId(selected)]
        else
            return 0
    }

    const [qty, setQty] = useState(getQty())

    useEffect(() => {
        setQty(getQty())
    }, [selected])

    const onAdd = () => {
        add(new CartItem(item, selected), selected)
        setQty(1)
    }

    const onInc = () => {
        inc(item.getSelectedId(selected))
        setQty(qty+1)
    }

    const onDec = () => {
        dec(item.getSelectedId(selected))
        setQty(qty-1)
    }


    if (qty === 0) {
        return (
            <LinearGradient style={{justifyContent: 'center', borderRadius: 8, width: 60, height: 35}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}>
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

const mapStateToProps = (state: RootState) => {
    return {
        cartQty: state.cartReducer.qty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (item: CartItem, selected: number) => dispatch(addItem(item, selected)),
        inc: (key: string) => dispatch(incItem(key)),
        dec: (key: string) => dispatch(decItem(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemQuantityButton)
