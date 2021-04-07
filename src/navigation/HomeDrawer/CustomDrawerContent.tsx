import React, { useEffect } from 'react'
import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
    useIsDrawerOpen
 } from '@react-navigation/drawer'
import colors from '../../assets/colors'
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/user'
import { RootState } from '../../redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setDrawerState } from '../../redux/actions/app'

export interface Props {
    setSignedOut: () => void,
    setDrawer: (a: boolean) => void,
    isSignedIn: boolean,
    navigation: any,
    setState: Function
}

const CustomDrawerContent: React.FC<Props> = (props) => {

    const isDrawerOpen = useIsDrawerOpen()

    useEffect(() => {
        props.setDrawer(isDrawerOpen)
    }, [isDrawerOpen])

    const signOut = async () => {
        try {
            await Auth.signOut()
            await AsyncStorage.removeItem('@User')
            props.setSignedOut()
            props.setState(false)
        } catch(error) {
            console.log('error signing out', error)
        }
    }

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} inactiveTintColor={colors.darkgrey} activeTintColor={colors.primary} />
            {
                props.isSignedIn ? (
                    <DrawerItem
                        activeTintColor={colors.primary}
                        inactiveTintColor={colors.darkgrey}
                        label="Log Out"
                        onPress={signOut}
                    />
                ) : null
            }
        </DrawerContentScrollView>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        isSignedIn: state.userReducer.signedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignedOut: () => dispatch(signOut()),
        setDrawer: (a: boolean) => dispatch(setDrawerState(a))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent)
