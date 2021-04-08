import React, {useEffect, useState} from 'react'

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
import Inventory from '../models/Inventory'

const Drawer = createDrawerNavigator();

export interface Props {
    inventory: Inventory,
    isSignedIn: boolean
}

const RootDrawer: React.FC<Props> = ({inventory, isSignedIn}) => {
    const [state, setState] = useState(isSignedIn)
    useEffect(() => {
        setState(isSignedIn)
    }, [isSignedIn])
    return (
        <Drawer.Navigator 
            drawerStyle={{
                width: 240,
            }}
            initialRouteName={"Dashboard"} 
            drawerContent={(props) => 
                (
                    <CustomDrawerContent {...props} setState={setState}/>
                )
            }
        >   
            <Drawer.Screen name="Dashboard" component={RootTab} />
            <Drawer.Screen name="My Cart" component={CartTab} />
            <Drawer.Screen name="Offer Zone" component={OffersTab} />
            {
                state ? (
                    <Drawer.Screen name="My Account" component={ProfileScreen} />
                ) : null
            }
            {
                state ? (
                    <Drawer.Screen name="Order History" component={OrderHistory} />
                ) : null
            }
        </Drawer.Navigator>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inventory: state.inventoryReducer.inventory,
        isSignedIn: state.userReducer.signedIn
    }
}

export default connect(mapStateToProps)(RootDrawer)