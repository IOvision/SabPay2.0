import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import User from '../../models/User'
import { RootState } from '../../redux/store'
import { BodyText } from '../atoms/Text'

export interface Props {
    user: User,
    setSelected: React.Dispatch<React.SetStateAction<number>>
}

const AddressDetails: React.FC<Props> = ({user, setSelected}) => {
    return (
        <View style={{height: 450, backgroundColor: 'white', padding: 10}}>
            <BodyText style={{fontSize: 20}}>Select an Address</BodyText>
            {
                user.address.map((text, index) => (
                    <TouchableOpacity onPress={() => console.log(index)} style={{borderWidth: 1, marginVertical: 5, padding: 5}}>
                        <BodyText>{text}</BodyText>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(AddressDetails)
