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
import { RootState } from '../../redux/store'


export interface Props {
    setSignedOut: () => void,
    isSignedIn: boolean
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
        setSignedOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContent)
