import React from 'react'

import ProfileScreen from '../screens/DrawerNavigator/ProfileScreen'
import MapScreen from '../screens/StackNavigator/MapScreen'
import OrderHistory from '../screens/DrawerNavigator/OrderHistoryScreen'
import CartTab from '../screens/TabNavigator/CartTab'
import OffersTab from '../screens/TabNavigator/OffersTab'
import { createDrawerNavigator } from '@react-navigation/drawer'

import RootTab from './RootTab'
import CustomDrawerContent from './HomeDrawer/CustomDrawerContent'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import Inventory from '../models/Inventory'

const Drawer = createDrawerNavigator();

export interface Props {
    inventory: Inventory,
}

const RootDrawer: React.FC<Props> = ({inventory}) => {
    return (
        <Drawer.Navigator 
            drawerStyle={{
                width: 240,
            }}
            initialRouteName={ inventory ? "Dashboard" : "Change Store" } 
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
            <Drawer.Screen name="Change Store" component={MapScreen} />
        </Drawer.Navigator>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inventory: state.inventoryReducer.inventory
    }
}

export default connect(mapStateToProps)(RootDrawer)