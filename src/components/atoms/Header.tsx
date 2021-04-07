import React, { useEffect, useState } from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';
import HeaderStyle from '../../styles/HeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import { DrawerActions } from '@react-navigation/native'
import { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import { HeaderText } from './Text';
import colors from '../../assets/colors';
import CartItem from '../../models/CartItem';

export interface Props {
  marginTop: number,
  back: () => void,
  title: string,
  color: string,
  isDrawerOpen: boolean,
  navigation: any,
  cart?: boolean,
  items: CartItem[]
}

const Header: React.FC<Props> = (props) => {

  const [itemCount, setItemCount] = useState(props.items.length)
  useEffect(() => {
    console.log("qty changed!")
    setItemCount(props.items.length)
  }, [props.items])

  const toggleDrawer = () => {
    props.navigation.dispatch(DrawerActions.toggleDrawer())
  }

  if (props.title) {
    return (
      <View style={[HeaderStyle.container]}>
        <View style={{flex: 1, flexDirection: 'row'}}>
        {
            !props.back ? (
              <View style={{justifyContent: 'center', marginStart: 10}}>
                <Icon style={HeaderStyle.start_icon} name={props.isDrawerOpen ? "close" : "menu"} color={Colors.primary} size={24} onPress={toggleDrawer} />
              </View>
            ) : (
              <View style={{justifyContent: 'center', marginStart: 10}}>
                <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={props.back} />
              </View>
            )
        }
          <HeaderText style={{fontSize: 20, textAlignVertical: 'center', color: colors.primary, marginStart: 10}}>{props.title}</HeaderText>
        </View>
        {
          props.cart ? (
            itemCount ? (
              <View style={{position: 'absolute', right: -5, bottom: -5, backgroundColor: 'red', borderRadius: 20, padding: 1}}>
                <HeaderText style={{fontSize: 14}}>{itemCount}</HeaderText>
              </View>
            ) : null
          ) : null
        }
      </View>
    );
  }

  return (
    <View style={{backgroundColor: props.color ? "white" : Colors.primary}}>
      <View style={[HeaderStyle.container]}>
        {
            !props.back ? (
              <View style={{flex: 1, justifyContent: 'center', marginStart: 10}}>
                <Icon style={HeaderStyle.start_icon} name={props.isDrawerOpen ? "close" : "menu"} color={Colors.primary} size={24} onPress={toggleDrawer} />
              </View>
            ) : (
              <View style={{flex: 1, justifyContent: 'center', marginStart: 10}}>
                <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={props.back} />
              </View>
            )
        }
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image source={require('../../assets/images/logo.png')} style={HeaderStyle.logo} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', marginRight: 10}}>
          <View>
            <Icon style={HeaderStyle.end_icon} name="cart" color={Colors.primary} size={24} onPress={() => props.navigation.navigate("Cart")} />
            {
              itemCount ? (
                <View style={{
                  height: 20, 
                  width: 20, 
                  position: 'absolute', 
                  right: -5, 
                  bottom: -5,
                  backgroundColor: colors.gold, 
                  borderRadius: 20, 
                  padding: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <HeaderText style={{fontSize: 12, color: colors.primary}}>{itemCount}</HeaderText>
                </View>
              ) : null
            }
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isDrawerOpen: state.appReducer.isDrawerOpen,
    items: state.cartReducer.items
  }
}

export default connect(mapStateToProps)(Header)