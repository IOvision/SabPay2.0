import React from 'react'
import Header from '../components/atoms/Header'

//Navigation Imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import ShopScreen from '../screens/DrawerNavigator/ShopScreen'
import MapScreen from '../screens/StackNavigator/MapScreen'
import ItemsScreen from '../screens/StackNavigator/ItemsScreen'
import ItemDetailScreen from '../screens/StackNavigator/ItemDetailScreen'
import CategoryList from '../screens/StackNavigator/CategoryList'
import PlaceOrderScreen from '../screens/StackNavigator/PlaceOrderScreen'
import OrderDetail from '../screens/StackNavigator/OrderDetail'
import OrderPlacedScreen from '../screens/StackNavigator/OrderPlacedScreen'
import RootDrawer from './RootDrawer'
import Signup from '../screens/StackNavigator/Signup';

const MainStack: React.FC = () => {
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
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header back={() => navigation.pop()} navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="Change Store" 
                    component={ShopScreen}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header back={() => navigation.pop()} navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="Map" 
                    component={MapScreen}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="CategoryList" 
                    component={CategoryList}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header back={() => navigation.pop()} navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="Items" 
                    component={ItemsScreen}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header back={() => navigation.pop()} navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="ItemDetails" 
                    component={ItemDetailScreen}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header back={() => navigation.pop()} navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="PlaceOrder" 
                    component={PlaceOrderScreen}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header color="white" back={() => navigation.pop()} navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="OrderDetail" 
                    component={OrderDetail}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header back={() => navigation.pop()} navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="OrderPlacedScreen" 
                    component={OrderPlacedScreen}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header back={() => navigation.pop()} navigation={navigation} image={require('../assets/images/logo.png')} />
                            )
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack