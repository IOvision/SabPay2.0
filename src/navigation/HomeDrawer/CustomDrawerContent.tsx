import React from 'react'
import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
 } from '@react-navigation/drawer'
import DrawerHeader from '../../components/molecules/DrawerHeader'
import colors from '../../assets/colors'
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/user'

export interface Props {
    setSignedOut: () => void
}

const CustomDrawerContent: React.FC<Props> = (props) => {

    const signOut = async () => {
        try {
            await Auth.signOut()
            props.setSignedOut()
        } catch(error) {
            console.log('error signing out', error)
        }
    }

    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            <DrawerItemList {...props} inactiveTintColor={colors.darkgrey} activeTintColor={colors.primary} />
            <DrawerItem
                activeTintColor={colors.primary}
                inactiveTintColor={colors.darkgrey}
                label="Log Out"
                onPress={signOut}
            />
        </DrawerContentScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignedOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(CustomDrawerContent)
