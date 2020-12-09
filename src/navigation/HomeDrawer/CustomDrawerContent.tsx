import React from 'react'
import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
 } from '@react-navigation/drawer'
import DrawerHeader from '../../components/molecules/DrawerHeader'
import colors from '../../assets/colors'

export interface Props {
    
}

const CustomDrawerContent: React.FC<Props> = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            <DrawerItemList {...props} inactiveTintColor={colors.darkgrey} activeTintColor={colors.primary} />
            <DrawerItem
                activeTintColor={colors.primary}
                inactiveTintColor={colors.darkgrey}
                label="Log Out"
                onPress={() => console.log("Logged Out!")}
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
