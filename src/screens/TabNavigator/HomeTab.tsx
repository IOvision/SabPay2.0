import React, { useEffect, useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import Swipeable from '../../components/molecules/Swipeable'
import { CaptionText } from '../../components/atoms/Text'
import HomePageCategoryList from '../../components/molecules/HomePageCategoryList'
import StoreSpecialList from '../../components/molecules/StoreSpecialList'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import Inventory from '../../models/Inventory'
import { getCarousel, getMerchantDetails } from '../../requests'
import { setInventory } from '../../redux/actions/inventory';
import LottieView from 'lottie-react-native'

export interface Props {
    navigation: any,
    inventory: Inventory,
    set: (a: Inventory) => void,
}

const HomeTab: React.FC<Props> = ({navigation, inventory, set}) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false)
    const [specialOffers1, setSpecialOffers1] = useState<Array<string>>([])
    const [specialOffers2, setSpecialOffers2] = useState<Array<string>>([])

    const onRefresh = () => {
        setIsRefreshing(false)
    }

    useEffect(() => {
        if (isRefreshing || isLoading) {
            Promise.all([getCarousel(), getMerchantDetails(inventory.SK)])
            .then(data => {
                const first = data[0]
                const second = data[1]
                let result = [];
                for (let i = 2; i > 0; i--) {
                    result.push(first.splice(0, Math.ceil(first.length / i)));
                }
                setSpecialOffers1(result[0])
                setSpecialOffers2(result[1])
                inventory.storeSp = second.storeSp
                inventory.offers = second.offers
                inventory.exclude = second.exclude
                inventory.tags = second.tags
                setIsLoading(false)
                setIsRefreshing(false)
            })
        }
    }, [isRefreshing])

    if(isLoading) {
        return <LottieView style={{display: "flex", flex: 1, backgroundColor: "white"}} source={require('../../assets/animations/mainLoading.json')} autoPlay loop />
    }

    return (
        <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
            <SearchWithBackground home={true} navigation={navigation} name={inventory.shopName} address={inventory.address.locality}/>
            <ScrollView 
                style={{display: "flex", flex: 1, padding: 15, backgroundColor: "#f5f5f5"}}
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={onRefresh}
                    />
                }
            >
                <CaptionText style={{marginBottom: 10, marginTop: 10}}>Shop By Category</CaptionText>
                <HomePageCategoryList data={inventory.tags ? Object.keys(inventory.tags) : []} baseUrl={"https://raw.githubusercontent.com/IOvision/assets/master/images/categories/"} navigation={navigation}  isLoading={isLoading}/>
                {
                    inventory.storeSp == null ? (
                        <View>
                            <CaptionText style={{marginBottom: 10}}>Store Specials</CaptionText>
                            <StoreSpecialList object={inventory.storeSp} />
                        </View>
                    ) : null
                }
                {/* <StoreSpecialList object={inventory.storeSp} /> */}
                <Swipeable data={specialOffers1} />
                {/* <CaptionText style={{marginBottom: 10}}>Deals of the Day</CaptionText>
                <HomePageOffers data={dealsOfTheDay}/> */}
                <CaptionText style={{marginBottom: 10}}>Special Offers</CaptionText>
                <Swipeable data={specialOffers2} />
                <View style={{height: 30}}></View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inventory: state.inventoryReducer.inventory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        set: (inventory: Inventory) => dispatch(setInventory(inventory)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab)
