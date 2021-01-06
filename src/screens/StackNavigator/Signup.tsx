import React from 'react'
import { View } from 'react-native'
import InputText from '../../components/atoms/InputText'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'

export interface Props {
    navigation: any
}

const Signup: React.FC<Props> = ({navigation}) => {
    return (
        <View style={{padding: 20, backgroundColor: "white", flex: 1}}>
            <InputText placeholder={"Name"}/>
            <InputText placeholder={"House/Flat number"}/>
            <InputText placeholder={"Colony/ Society/ Road"}/>
            <InputText placeholder={"City/State"}/>
            <PurpleRoundBtn text={"Save"} style={{alignSelf: "center", marginTop: 20}}/>
        </View>
    )
}
export default Signup
