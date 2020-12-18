import React from 'react'

import ProfileScreen from '../screens/DrawerNavigator/ProfileScreen'
import ShopScreen from '../screens/DrawerNavigator/ShopScreen'
import OrderHistory from '../screens/DrawerNavigator/OrderHistoryScreen'
import CartTab from '../screens/TabNavigator/CartTab'
import OffersTab from '../screens/TabNavigator/OffersTab'
import { createDrawerNavigator } from '@react-navigation/drawer'

import RootTab from './RootTab'
import CustomDrawerContent from './HomeDrawer/CustomDrawerContent'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import Merchant from '../models/Merchant'

const Drawer = createDrawerNavigator();

export interface Props {
    merchant: Merchant
}

const RootDrawer: React.FC<Props> = ({merchant}) => {
    return (
        <Drawer.Navigator 
            drawerStyle={{
                width: 240,
            }}
            initialRouteName={ merchant ? "Dashboard" : "Change Store" } 
            drawerContent={(props) => 
                (
                    <CustomDrawerContent {...props} />
                )
            }
        >   
            <Drawer.Screen name="Dashboard" component={RootTab} />
            <Drawer.Screen name="My Cart" component={CartTab} />
            <Drawer.Screen name="Order History" component={OrderHistory} />
            <Drawer.Screen name="My Account" component={ProfileScreen} />
            <Drawer.Screen name="Offer Zone" component={OffersTab} />
            <Drawer.Screen name="Change Store" component={ShopScreen} />
        </Drawer.Navigator>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        merchant: state.merchantReducer.merchant
    }
}

export default connect(mapStateToProps)(RootDrawer)