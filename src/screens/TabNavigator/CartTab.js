import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Dimensions, FlatList, Button, Text } from 'react-native'
import { HeaderText, BodyText } from '../../components/atoms/Text'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import colors from '../../assets/colors'
import EmptyCartSvg from '../../assets/svg/EmptyCartSvg'
import CartItemListItem from '../../components/molecules/CartItemListItem'
import CartPriceDetails from '../../components/molecules/CartPriceDetails'
import Login from '../../components/molecules/Login'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

const {width, height} = Dimensions.get('window')
const CartTab = (props) => {
    const sheetRef = React.useRef(null);
    const [isLogin, setIsLogin] = useState(true)
    const handleContinue = () => (
        <Login />
    )
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
            <SearchWithBackground navigation={props.navigation} />
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
                        <View style={{margin: 20}}>
                            <CartPriceDetails />
                            <HeaderText style={{marginLeft: 20, marginTop: 10}}>Delivery Options</HeaderText>
                            <View style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
                                <View style={{flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center', paddingHorizontal: 10}}>
                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={styles.deliveryOption} activeOpacity={0.9}>
                                            <BodyText>Express</BodyText>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex: 1, marginHorizontal: 5}}>
                                        <TouchableOpacity style={styles.deliveryOption} activeOpacity={0.9}>
                                            <BodyText>Standard</BodyText>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex: 1}}>
                                        <TouchableOpacity style={styles.deliveryOption} activeOpacity={0.9}>
                                            <BodyText>Pick-Up</BodyText>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
            <View style={styles.continueBtn}>
                <PurpleRoundBtn gradient text="Continue" style={{borderRadius: 10}} onPress={() => isLogin ? props.navigation.navigate("PlaceOrder") : sheetRef.current.snapTo(0)}/>
            </View>
            <BottomSheet
                initialSnap={2}
                ref={sheetRef}
                snapPoints={[220, 300, 0]}
                borderRadius={10}
                renderContent={handleContinue}
            />
        </View>
    )
}

export default CartTab

const styles = StyleSheet.create({
    continueBtn: {
        display: "flex", margin: 10, alignItems: "flex-end", borderWidth: 1, borderColor: "white", borderTopColor: colors.mediumGrey, padding: 10
    },
    deliveryOption: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.mediumGrey,
        borderRadius: 5,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center"
    },

})