import React from 'react'
import { View, Image, StyleSheet, Dimensions, FlatList, Text } from 'react-native'
import SearchBar from '../../components/atoms/SearchBar'
import { HeaderText } from '../../components/atoms/Text'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import colors from '../../assets/colors'
import EmptyCartSvg from '../../assets/svg/EmptyCartSvg'
import CartItemListItem from '../../components/molecules/CartItemListItem'
import CartPriceDetails from '../../components/molecules/CartPriceDetails'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

const {width, height} = Dimensions.get('window')
const CartTab = (props) => {
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
        },
      ];
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <SearchWithBackground />
            <FlatList 
                data={DATA}
                ListEmptyComponent={() => {
                    return (
                        <View style={{height: 400, width: 400, marginTop: 20, alignItems: "center"}}>
                            <EmptyCartSvg />
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
                }}
                renderItem={({item, index}) => {
                return <CartItemListItem />
                }}
                ListFooterComponent={() => {
                    return (
                        <View>
                            <CartPriceDetails />
                            <HeaderText style={{marginLeft: 20}}>Delivery Options</HeaderText>
                            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
                                <PurpleRoundBtn text="Express" style={styles.deliveryOption} color="black" />
                                <PurpleRoundBtn text="Standard" style={styles.deliveryOption} color="black" />
                                <PurpleRoundBtn text="Pick-Up" style={styles.deliveryOption} color="black" />
                            </View>
                        </View>
                    )
                }}
            />
            <View style={styles.continueBtn}>
                <PurpleRoundBtn text="Continue" />
            </View>
        </View>
    )
}

export default CartTab

const styles = StyleSheet.create({
    continueBtn: {
        display: "flex", margin: 10, alignItems: "flex-end", borderWidth: 1, borderColor: "white", borderTopColor: colors.mediumGrey, padding: 10
    },
    deliveryOption: {
        margin: 10, 
        borderWidth: 1,
        borderColor: colors.mediumGrey,
        borderRadius: 5,
        backgroundColor: "white",
        paddingHorizontal: 10
    }
})