import React from 'react'

import HomeTab from '../screens/TabNavigator/HomeTab'
import CartTab from '../screens/TabNavigator/CartTab'
import CategoriesTab from '../screens/TabNavigator/CategoriesTab'
import OffersTab from '../screens/TabNavigator/OffersTab'
import colors from '../assets/colors'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();

const RootTab: React.FC = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Home"
            activeColor={colors.primary}
            inactiveColor="#A7A7A7"
            barStyle={{
                backgroundColor: 'white'
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeTab}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    )
                }}
            />
            <Tab.Screen 
                name="Categories" 
                component={CategoriesTab} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-grid" color={color} size={24} />
                    )
                }}
            />
            <Tab.Screen 
                name="Offers" 
                component={OffersTab} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="percent" color={color} size={24} />
                    )
                }}
            />
            <Tab.Screen 
                name="Cart" 
                component={CartTab} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={24} />
                    )
                }}
            />
        </Tab.Navigator> 
    )
}

export default RootTab