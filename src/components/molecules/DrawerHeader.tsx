import React from 'react'
import { View } from 'react-native'
import { HeaderText } from '../atoms/Text'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import DrawerHeaderStyle from '../../styles/DrawerHeaderStyle'
import colors from '../../assets/colors'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'

export interface Props {
    isSignedIn: boolean
}

const DrawerHeader: React.FC<Props> = ({isSignedIn}) => {
    if (isSignedIn) {
        return (
            <View style={{padding: 50, backgroundColor: colors.primary, alignItems: 'center'}}>
                <HeaderText style={{color: 'white'}}>Logged In</HeaderText>
            </View>
        )
    } else {
        return (
            <View style={{padding: 50, backgroundColor: colors.primary, alignItems: 'center'}}>
                <HeaderText style={{color: 'white'}}>Logged Out</HeaderText>
            </View>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        isSignedIn: state.userReducer.signedIn
    }
}

export default connect(mapStateToProps)(DrawerHeader)
