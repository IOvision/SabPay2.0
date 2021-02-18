import React from 'react'
import { View } from 'react-native'
import { HeaderText } from '../atoms/Text'
import colors from '../../assets/colors'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import User from '../../models/User'

export interface Props {
    isSignedIn: boolean,
    user: User
}

const DrawerHeader: React.FC<Props> = ({isSignedIn, user}) => {
    if (isSignedIn) {
        return (
            <View style={{padding: 40, backgroundColor: colors.primary, alignItems: 'center', marginTop: -10}}>
                <HeaderText style={{color: 'white'}}>{user.username}</HeaderText>
                <HeaderText style={{color: 'white'}}>{user.phoneNumber}</HeaderText>
            </View>
        )
    } else {
        return (
            <View style={{padding: 50, backgroundColor: colors.primary, alignItems: 'center', marginTop: -10}}>
                <HeaderText style={{color: 'white'}}>Login/Register</HeaderText>
            </View>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        isSignedIn: state.userReducer.signedIn,
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(DrawerHeader)
