import React, { useEffect, useRef } from 'react'
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { HeaderText, BodyText } from '../../components/atoms/Text'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import colors from '../../assets/colors'
import EmptyCartSvg from '../../assets/svg/EmptyCartSvg'
import CartItemListItem from '../../components/molecules/CartItemListItem'
import CartPriceDetails from '../../components/molecules/CartPriceDetails'
import Login from '../../components/molecules/Login'
import BottomSheet from 'reanimated-bottom-sheet';
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

//Redux
import { connect } from 'react-redux'
import CartItem from '../../models/CartItem'
import { RootState } from '../../redux/store'

export interface Props {
    cart: CartItem[],
    qty: any,
    total: number,
    isSignedIn: boolean,
    navigation: any
}

const CartTab: React.FC<Props> = (props) => {

    const sheetRef = useRef(null)

    const handleContinue = () => (
        <Login />
    )
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <SearchWithBackground navigation={props.navigation} />
            <FlatList 
                data={props.cart}
                keyExtractor={(item) => item.getSelectedId()}
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
                                onPress={() => props.navigation.navigate("CategoryList")}
                            />
                        </View>
                    )
                }}
                renderItem={({item, index}) => {
                    return <CartItemListItem item={item} />
                }}
                ListFooterComponent={() => {
                    return (
                        props.cart.length != 0 ? <View style={{margin: 20}}>
                        <CartPriceDetails price={props.total} discount={0} />
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
                    </View> : null
                    )
                }}
            />
            {
                props.cart.length != 0 ? (
                    <View style={styles.continueBtn}>
                        <PurpleRoundBtn mode="gradient" text="Continue" style={{borderRadius: 10}} onPress={() => props.isSignedIn ? props.navigation.navigate("PlaceOrder") : sheetRef.current.snapTo(0)}/>
                    </View>
                ) : null
            }
            <BottomSheet
                initialSnap={2}
                ref={sheetRef}
                snapPoints={[220, 220, 0]}
                borderRadius={10}
                renderContent={handleContinue}
            />
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        isSignedIn: state.userReducer.signedIn,
        cart: state.cartReducer.items,
        qty: state.cartReducer.qty,
        total: state.cartReducer.total
    }
}

export default connect(mapStateToProps)(CartTab)

const styles = StyleSheet.create({
    continueBtn: {
        display: "flex", 
        margin: 10, 
        alignItems: "flex-end", 
        borderWidth: 1, 
        borderColor: "white", 
        borderTopColor: colors.mediumGrey, 
        padding: 10
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