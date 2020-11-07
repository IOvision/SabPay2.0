import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeRoot = () => {
    return(
        <Tab.Navigator initialRouteName="Tab Screen 1">
            <Tab.Screen name="Tab Screen 1" component={() => <View><Text>Tab Screen 1</Text></View>} />
            <Tab.Screen name="Tab Screen 2" component={() => <View><Text>Tab Screen 2</Text></View>} />
        </Tab.Navigator>
    )
}

const Root = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Tab Navigator">
                <Drawer.Screen name="Tab Navigator" component={HomeRoot} />
                <Drawer.Screen name="Screen 2" component={() => <View><Text>Screen 2</Text></View>} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default Root