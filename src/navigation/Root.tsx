import React from 'react'
import Header from '../components/atoms/Header'

//Navigation Imports
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import ShopScreen from '../screens/DrawerNavigator/ShopScreen'
import ItemsScreen from '../screens/StackNavigator/ItemsScreen'
import ItemDetailScreen from '../screens/StackNavigator/ItemDetailScreen'
import CategoryList from '../screens/StackNavigator/CategoryList'
import PlaceOrderScreen from '../screens/StackNavigator/PlaceOrderScreen'
import OrderDetail from '../screens/StackNavigator/OrderDetail'
import OrderPlacedScreen from '../screens/StackNavigator/OrderPlacedScreen'
import RootDrawer from './RootDrawer'
import Signup from '../screens/StackNavigator/Signup';
import CartTab from '../screens/TabNavigator/CartTab';
import Inventory from '../models/Inventory'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'

export interface Props {
    inventory: Inventory
}

const MainStack: React.FC<Props> = ({inventory}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={inventory ? "Main" : "Map"}
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
                                <Header 
                                    back={() => navigation.pop()}
                                    navigation={navigation}
                                    cart={false}
                                />
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
                                null
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="Map" 
                    component={ShopScreen}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                null
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
                                <Header 
                                    back={() => navigation.pop()}
                                    navigation={navigation}
                                    cart={false}
                                />
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
                                <Header 
                                    back={() => navigation.pop()}
                                    navigation={navigation}
                                    cart={false}
                                />
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
                                <Header 
                                    back={() => navigation.pop()}
                                    navigation={navigation}
                                    cart={false}
                                />
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
                                <Header 
                                    back={() => navigation.pop()}
                                    navigation={navigation}
                                    cart={false}
                                />
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
                                <Header 
                                    back={() => navigation.pop()}
                                    navigation={navigation}
                                    cart={false}
                                />
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
                                <Header 
                                    back={() => navigation.popToTop()} 
                                    navigation={navigation}
                                    cart={false}
                                />
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name="Cart" 
                    component={CartTab}
                    options={{
                        header: ({ scene, previous, navigation}) => {
                            return (
                                <Header 
                                    back={() => navigation.pop()}
                                    navigation={navigation}
                                    title="My Cart"
                                    cart={false}
                                />
                            )
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inventory: state.inventoryReducer.inventory
    }
}

export default connect(mapStateToProps)(MainStack)
