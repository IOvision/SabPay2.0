import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { colorsType } from '../../assets/colors';
import {StoreSpecialListItemStyles} from '../../styles/FlatListItemStyle';
import {BodyText} from '../atoms/Text';import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import Merchant from '../../models/Merchant'
import { addItem } from '../../redux/actions/cart'
import CartItem from '../../models/CartItem'
import Item from '../../models/Item'

export interface Props {
    color: colorsType,
    merchant: Merchant,
    item: Item,
    addToCart: (item: CartItem, selected: number) => void
}

const StoreSpecialListItem: React.FC<Props> = ({item, color, addToCart,merchant}) => {
  console.log("store: " + Object.keys(item))
  return (
    <TouchableOpacity style={StoreSpecialListItemStyles.container} 
      onPress={(e) => addToCart(new CartItem(item, 0), 0)}>
      <View style={StoreSpecialListItemStyles.containerView}>
        <Image source={{uri: item.image}} style={{...StoreSpecialListItemStyles.image, backgroundColor: color}} />
        <BodyText style={StoreSpecialListItemStyles.text}>{item.name}</BodyText>
        <BodyText style={StoreSpecialListItemStyles.price}>Rs. {item.child[0].price}</BodyText>
      </View>
    </TouchableOpacity>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
      merchant: state.merchantReducer.merchant
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addToCart : (item: CartItem, selected: number) => dispatch(addItem(item, selected))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreSpecialListItem)