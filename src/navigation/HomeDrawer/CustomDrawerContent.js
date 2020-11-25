import React from 'react'
import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
 } from '@react-navigation/drawer'
import DrawerHeader from '../../components/molecules/DrawerHeader'

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            <DrawerItemList {...props} inactiveTintColor="white" activeTintColor="#d3d3d3" />
            <DrawerItem
                activeTintColor="#d3d3d3"
                inactiveTintColor="white"
                label="Log Out"
                onPress={() => console.log("Logged Out!")}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
