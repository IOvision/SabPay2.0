import React from 'react';
import {View, Image} from 'react-native';
import HeaderStyle from './../../styles/HeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import { DrawerActions } from '@react-navigation/native'

const Header = ({marginTop, image, navigation}) => {
  return (
    <View style={[HeaderStyle.container]}>
      <View style={{flex: 1, justifyContent: 'center', marginStart: 20}}>
        <Icon style={HeaderStyle.start_icon} name="menu" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image source={image} style={HeaderStyle.logo} />
      </View>
      <View style={{flex: 1, justifyContent: 'center', marginRight: 20}}>
        <Icon style={HeaderStyle.end_icon} name="cart" color={Colors.primary} size={24} />
      </View>
    </View>
  );
};

export default Header