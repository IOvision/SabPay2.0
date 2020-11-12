import React from 'react';
import {View, Image, Text} from 'react-native';
import HeaderStyle from './../../styles/HeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import { DrawerActions, TabActions } from '@react-navigation/native'

const Header = ({marginTop, image, navigation, back, title}) => {
  
  if (title) 
  return (
    <View style={{backgroundColor: Colors.primary}}>
      <View style={{ ...HeaderStyle.container, justifyContent: 'flex-start'}}>
        {
            !back ? (
              <View style={{marginStart: 20}}>
                <Icon style={HeaderStyle.start_icon} name="menu" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
              </View>
            ) : (
              <View style={{marginStart: 20, alignSelf: 'center'}}>
                <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={back} />
              </View>
            )
        }
        <Text style={{alignSelf: 'center', fontSize: 24, color: Colors.primary, marginStart: 18}}>{title}</Text>
      </View>
    </View>
  )
  
  return (
    <View style={{backgroundColor: Colors.primary}}>
      <View style={[HeaderStyle.container]}>
        {
            !back ? (
              <View style={{flex: 1, justifyContent: 'center', marginStart: 20}}>
                <Icon style={HeaderStyle.start_icon} name="menu" color={Colors.primary} size={24} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
              </View>
            ) : (
              <View style={{flex: 1, justifyContent: 'center', marginStart: 20}}>
                <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={back} />
              </View>
            )
        }
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image source={image} style={HeaderStyle.logo} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', marginRight: 20}} />
      </View>
    </View>
  );
};

export default Header