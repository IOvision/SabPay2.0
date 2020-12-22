import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import colors from '../../assets/colors'
import { HeaderText, BodyText } from '../../components/atoms/Text'
import CartItemListItem from '../../components/molecules/CartItemListItem'
import DeliveryStatus from '../../components/atoms/DeliveryStatus'
import CartPriceDetails from '../../components/molecules/CartPriceDetails'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

export interface Props {
    navigation: any,
    route: {
        params: {
          data: Object
        }
    }
}
const OrderDetail: React.FC<Props> = ({route, navigation})=>  {
    console.log("data1: " + Object.keys(route.params.data.items[0]))

    return (
        <View style={{display: "flex", flex: 1, backgroundColor: colors.white}}>
        <View style={styles.container}>
            <SearchWithBackground navigation={navigation}/>
            <View>
                <HeaderText>Delivered Text</HeaderText>
                <BodyText>{route.params.data.address}</BodyText>
            </View>
            <View style={styles.end}></View>                
            <View>
                <HeaderText>Service Provider</HeaderText>
                <BodyText>{route.params.data.merchantName}</BodyText>
            </View>
            <View style={styles.end}></View>
            <HeaderText>Order Id - {route.params.data.id}</HeaderText>
            <FlatList 
                data={route.params.data.items}
                renderItem={({item, index}) => {
                    return <CartItemListItem style={{marginHorizontal: -10 }} item={item} show={false}/>
                }}
                ListFooterComponent={() => {
                    return (
                        <View>
                            <DeliveryStatus style={{margin: 20}} counter={"order confirmed"}/>
                            <View style={styles.end}></View>
                            <CartPriceDetails price={route.params.data.total} discount={route.params.data.discount}/>
                        </View>
                    )
                }}/>
        </View>
        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        borderStyle: "solid",
        borderColor: colors.mediumGrey,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: colors.white
    },
    end: {
        borderStyle: "solid",
        borderBottomColor: colors.mediumGrey,
        borderBottomWidth: 1,
        marginHorizontal: -10,
        marginVertical: 10
    }
})
