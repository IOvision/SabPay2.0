import React from 'react'
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import CustomDrawerContent from './HomeDrawer/CustomDrawerContent'

import Header from '../components/atoms/Header'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import Colors from '../assets/colors'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const CenterText = ({route}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
                {route.name}
            </Text>
        </View>
    )
}

const HomeRoot = () => {
    return(
        <Tab.Navigator 
            initialRouteName="Tab Screen 1"
            activeColor={Colors.primary}
            inactiveColor="#A7A7A7"
            barStyle={{
                backgroundColor: 'white'
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={CenterText}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    )
                }}
            />
            <Tab.Screen 
                name="Categories" 
                component={CenterText} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="view-grid" color={color} size={24} />
                    )
                }}
            />
            <Tab.Screen 
                name="Offers" 
                component={CenterText} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="percent" color={color} size={24} />
                    )
                }}
            />
        </Tab.Navigator> 
    )
}

const RootDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Tab Navigator" drawerContent={(props) => <CustomDrawerContent {...props} /> }>
            <Drawer.Screen name="Dashboard" component={HomeRoot} />
            <Drawer.Screen name="My Cart" component={CenterText} />
            <Drawer.Screen name="My Account" component={CenterText} />
            <Drawer.Screen name="Offer Zone" component={CenterText} />
            <Drawer.Screen name="Change Store" component={CenterText} />
            <Drawer.Screen name="User Agreement" component={CenterText} />
            <Drawer.Screen name="Return Policy" component={CenterText} />
        </Drawer.Navigator>
    )
}

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: ({ scene, previous, navigation}) => {
                        return (
                            <Header navigation={navigation} image={require('../assets/images/logo.png')} />
                        )
                    }
                }}
            >   
                <Stack.Screen name="Main" component={RootDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack