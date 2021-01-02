import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import User from '../../models/User'
import { RootState } from '../../redux/store'
import { BodyText } from '../atoms/Text'
import RoundView from '../atoms/RoundView'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import PurpleRoundBtn from '../atoms/PurpleRoundBtn'


export interface Props {
    user: User,
    setSelected: React.Dispatch<React.SetStateAction<number>>,
    selected: string
}

const AddressDetails: React.FC<Props> = ({user, setSelected, selected}) => {
    console.log("selected: " + selected)
    return (
        <RoundView style={{height: 450, backgroundColor: "#E5E5E5", padding: 10}}>
            <Icon name="chevron-triple-down" style={{alignSelf: "center", marginBottom: 10}} color={"black"} size={24} />
            <BodyText style={{fontSize: 20, color: Colors.primary}}>Select an Address</BodyText>
            {
                user.address.map((text, index) => (
                    text == selected ? (
                        <TouchableOpacity onPress={() => console.log(index)} style={{borderWidth: 1, marginVertical: 5, padding: 5, backgroundColor: "#CDCDCD"}}>
                            <BodyText>{text}</BodyText>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => console.log(index)} style={{borderWidth: 1, marginVertical: 5, padding: 5}}>
                            <BodyText>{text}</BodyText>
                        </TouchableOpacity>
                    )
                ))
            }
            <PurpleRoundBtn text="Add Address" style={{alignSelf: "center", marginTop: 20}}/>
        </RoundView>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(AddressDetails)
