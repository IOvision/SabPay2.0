import React from 'react'
import { View, Text } from 'react-native'

//UI
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomDrawerContent from './HomeDrawer/CustomDrawerContent'
import Header from '../components/atoms/Header'
import LinearGradient from 'react-native-linear-gradient'

//Navigation Imports
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

//Colors
import Colors from '../assets/colors'

//Navigation Components
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

//Tab Screens
import HomeTab from '../screens/TabNavigator/HomeTab'
import CartTab from '../screens/TabNavigator/CartTab'
import CategoriesTab from '../screens/TabNavigator/CategoriesTab'
import OffersTab from '../screens/TabNavigator/OffersTab'

//Drawer Screens
import ProfileScreen from '../screens/DrawerNavigator/ProfileScreen'
import ShopScreen from '../screens/DrawerNavigator/ShopScreen'
import OrderHistory from '../screens/DrawerNavigator/OrderHistoryScreen'
import ItemsScreen from '../screens/StackNavigator/ItemsScreen'
import ItemDetailScreen from '../screens/StackNavigator/ItemDetailScreen'
import colors from '../assets/colors'
import CategoryList from '../screens/StackNavigator/CategoryList'
import PlaceOrder from '../screens/StackNavigator/PlaceOrder'
import OrderDetail from '../screens/StackNavigator/OrderDetail'
import OrderPlacedScreen from '../screens/StackNavigator/OrderPlacedScreen'

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

const RootDrawer = () => {
    const gradient = () => {
        return (
            <LinearGradient style={[styles.container, style]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8021EB', '#04035C']}></LinearGradient>
        )
    }
    return (
        <Drawer.Navigator 
            drawerStyle={{
                width: 240,
            }}
            initialRouteName="Tab Navigator" 
            drawerContent={(props) => 
                (
                    <LinearGradient 
                        style={{
                            padding: 10,
                            paddingHorizontal: 30,
                            display: "flex",
                            alignSelf: 'baseline'}} 
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                        colors={['#8021EB', '#04035C']}>
                        <CustomDrawerContent {...props} />
                    </LinearGradient>
                )
            }
            screenOptions={{
                header: ({ scene, previous, navigation}) => {
                    return (
                        <View style={{backgroundColor: colors.primary}}><Header navigation={navigation} image={require('../assets/images/logo.png')} /></View>
                    )
                }
            }}
        >   
            <Drawer.Screen style={{color: "white"}} name="Dashboard" component={HomeRoot} />
            <Drawer.Screen name="My Cart" component={CartTab} />
            <Drawer.Screen name="Order History" component={OrderHistory} />
            <Drawer.Screen name="My Account" component={ProfileScreen} />
            <Drawer.Screen name="Offer Zone" component={OffersTab} />
            <Drawer.Screen name="Change Store" component={ShopScreen} />
            <Drawer.Screen name="User Agreement" component={CenterText} />
            <Drawer.Screen name="Return Policy" component={CenterText} />
        </Drawer.Navigator>
    )
}

export interface Props {}

const MainStack: React.FC<Props> = () => {
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
                    component={PlaceOrder}
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