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
    console.log("details: " + Object.keys(route.params.data))
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
                <BodyText>Abhishek General Store</BodyText>
            </View>
            <View style={styles.end}></View>
            <HeaderText>Order Id - OD19965369fhyv</HeaderText>
            <FlatList 
                data={DATA}
                renderItem={({item, index}) => {
                    return <CartItemListItem style={{marginHorizontal: -10 }} />
                }}
                ListFooterComponent={() => {
                    return (
                        <View>
                            <DeliveryStatus style={{margin: 20}} counter={"order confirmed"}/>
                            <View style={styles.end}></View>
                            <CartPriceDetails />
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
