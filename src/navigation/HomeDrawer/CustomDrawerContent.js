import React from 'react'
import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
 } from '@react-navigation/drawer'
import DrawerHeader from '../../components/molecules/DrawerHeader'
import colors from '../../assets/colors'

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            <DrawerItemList {...props} inactiveTintColor="#d3d3d3" activeTintColor={colors.primary} />
            <DrawerItem
                activeTintColor={colors.primary}
                inactiveTintColor="#d3d3d3"
                label="Log Out"
                onPress={() => console.log("Logged Out!")}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
