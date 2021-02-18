import React from 'react';
import {View, Image, Text, ImageSourcePropType} from 'react-native';
import HeaderStyle from '../../styles/HeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import { DrawerActions } from '@react-navigation/native'
import { RootState } from '../../redux/store';
import { connect } from 'react-redux';
import { HeaderText } from './Text';
import colors from '../../assets/colors';

export interface Props {
  marginTop: number,
  back: () => void,
  title: string,
  color: string,
  isDrawerOpen: boolean,
  navigation: any
  cart?: boolean
}

class Header extends React.Component<Props> {

  toggleDrawer: () => void
  
  constructor(props: Props) {
    super(props)
    this.toggleDrawer = () => {
      this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }
  }

  render () {

    if (this.props.title) {
      return (
        <View style={[HeaderStyle.container]}>
          <View style={{flex: 1, flexDirection: 'row'}}>
          {
              !this.props.back ? (
                <View style={{justifyContent: 'center', marginStart: 10}}>
                  <Icon style={HeaderStyle.start_icon} name={this.props.isDrawerOpen ? "close" : "menu"} color={Colors.primary} size={24} onPress={this.toggleDrawer} />
                </View>
              ) : (
                <View style={{justifyContent: 'center', marginStart: 10}}>
                  <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={this.props.back} />
                </View>
              )
          }
            <HeaderText style={{fontSize: 20, textAlignVertical: 'center', color: colors.primary, marginStart: 10}}>{this.props.title}</HeaderText>
          </View>
          {
            this.props.cart ? (
              <View style={{flex: 1, justifyContent: 'center', marginRight: 10}}>
                <Icon style={HeaderStyle.end_icon} name="cart" color={Colors.primary} size={24} onPress={() => this.props.navigation.navigate("Cart")} />
              </View>
            ) : null
          }
        </View>
      );
    }

    return (
      <View style={{backgroundColor: this.props.color ? "white" : Colors.primary}}>
        <View style={[HeaderStyle.container]}>
          {
              !this.props.back ? (
                <View style={{flex: 1, justifyContent: 'center', marginStart: 10}}>
                  <Icon style={HeaderStyle.start_icon} name={this.props.isDrawerOpen ? "close" : "menu"} color={Colors.primary} size={24} onPress={this.toggleDrawer} />
                </View>
              ) : (
                <View style={{flex: 1, justifyContent: 'center', marginStart: 10}}>
                  <Icon style={HeaderStyle.start_icon} name="arrow-left" color={Colors.primary} size={24} onPress={this.props.back} />
                </View>
              )
          }
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image source={require('../../assets/images/logo.png')} style={HeaderStyle.logo} />
          </View>
          <View style={{flex: 1, justifyContent: 'center', marginRight: 10}}>
            <Icon style={HeaderStyle.end_icon} name="cart" color={Colors.primary} size={24} onPress={() => this.props.navigation.navigate("Cart")} />
          </View>
        </View>
      </View>
    );
  }
};

const mapStateToProps = (state: RootState) => {
  return {
    isDrawerOpen: state.appReducer.isDrawerOpen
  }
}

export default connect(mapStateToProps)(Header)