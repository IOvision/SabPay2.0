import React, { useRef, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { HeaderText } from '../../components/atoms/Text'
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
import ButtonGroups from '../../components/molecules/ButtonGroups'
import User from '../../models/User'

export interface Props {
    cart: CartItem[],
    user: User,
    qty: any,
    total: number,
    isSignedIn: boolean,
    navigation: any
}

const CartTab: React.FC<Props> = (props) => {

    const sheetRef = useRef(null)
    const DeliveryOptions: string[] = ["Express", "Standard", "Pick-up"]
    const [deliveryOption, setDeliveryOption] = useState(2)

    const closeBottomSheet = () => {
        sheetRef.current.snapTo(2)
    }

    const handleContinue = () => (
        <Login navigation={props.navigation} close={closeBottomSheet} />
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
                    return <CartItemListItem item={item} show={true}/>
                }}
                ListFooterComponent={() => {
                    return (
                        props.cart.length != 0 ? <View style={{margin: 20}}>
                        <CartPriceDetails price={props.total} discount={0} />
                        <HeaderText style={{marginLeft: 20, marginTop: 10}}>Delivery Options</HeaderText>
                        <ButtonGroups list={DeliveryOptions} selected={deliveryOption} setSelected={setDeliveryOption} />
                    </View> : null
                    )
                }}
            />
            {
                props.cart.length != 0 ? (
                    <View style={styles.continueBtn}>
                        <PurpleRoundBtn mode="gradient" text="Continue" style={{borderRadius: 10}} 
                        onPress={() => props.isSignedIn ? props.user ? props.navigation.navigate("PlaceOrder", {
                            deliveryType: deliveryOption
                        }) : props.navigation.navigate('Signup') : sheetRef.current.snapTo(0)}/>
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
        user: state.userReducer.user,
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
})