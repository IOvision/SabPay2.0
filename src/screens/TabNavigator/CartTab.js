import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import SearchBar from '../../components/molecules/SearchBar'
import { HeaderText } from '../../components/atoms/Text'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import colors from '../../assets/colors'
import { SvgUri } from 'react-native-svg'
import EmptyCartSvg from '../../assets/svg/EmptyCartSvg'

const {width, height} = Dimensions.get('window')
const CartTab = (props) => {

    const renderEmptyCart = () => {
        return (
            <View>
                <HeaderText>Your Cart Is Empty</HeaderText>
                <Image source={require('../../assets/images/billingHistory.jpg')} />
                <PurpleRoundBtn text="Shop Now" />
            </View>
        )
    }

    const renderItems = () => {
        return (
            <View>
                
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <View style={{
                backgroundColor: colors.primary, 
                width: width/2,
                height: 150,
                marginTop: -75,
                borderRadius: 50,
                position: 'absolute',
                alignSelf:'center',
                transform: [
                    {scaleX: 2.5}
                ]
            }} />
            <SearchBar placeholder="Search" style={{marginTop: 50, marginHorizontal: 15}} />
            {
                props.list == 0 ? (
                    renderEmptyCart()
                ) : (
                    renderItems()
                )
            }
            <View style={{flex: 1, padding: 50}}>
                <EmptyCartSvg />
            </View>
            <PurpleRoundBtn 
                style={{
                    alignSelf: 'center', 
                    marginBottom: 80,
                    borderRadius: 15,
                }} 
                text="Shop Now"
                textStyle={{
                    padding: 5,
                    fontSize: 20,
                    marginHorizontal: 2
                }}
            />
        </View>
    )
}

export default CartTab

const styles = StyleSheet.create({

})
