import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import SearchBar from '../../components/molecules/SearchBar'
import { HeaderText } from '../../components/atoms/Text'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
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
        <View>
            <SearchBar />
            {
                props.list == 0 ? (
                    renderEmptyCart()
                ) : (
                    renderItems()
                )
            }
        </View>
    )
}

export default CartTab

const styles = StyleSheet.create({

})
