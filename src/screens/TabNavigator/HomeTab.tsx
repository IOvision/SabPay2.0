import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import Swipeable from '../../components/molecules/Swipeable'
import { CaptionText } from '../../components/atoms/Text'
import HomePageCategoryList from '../../components/molecules/HomePageCategoryList'
import StoreSpecialList from '../../components/molecules/StoreSpecialList'
import HomePageOffers from '../../components/molecules/HomePageOffers'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import Merchant from '../../models/Merchant'

export interface Props {
    navigation: any,
    merchant: Merchant
}

const HomeTab: React.FC<Props> = ({navigation, merchant}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500)
    }, [])

    const object = [
        {
            title:"Dry Fruits (Diwali Special)",
            image: require('../../assets/images/dryFruits.png'),
            price: "Rs. 1000"
        },
        {
            title:"Skin Care Kit",
            image: require('../../assets/images/Skin_Care_Kit.png'),
            price: "Rs. 650"
        },
        {
            title:"Spices Special Combo",
            image: require('../../assets/images/Spices_Special_Combo.png'),
            price: "Rs. 210"
        }
    ]
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SearchWithBackground home={true} navigation={navigation} name={merchant.name} address={merchant.address}/>
            <ScrollView style={{display: "flex", flex: 1, padding: 15, backgroundColor: "white"}}>
                <CaptionText style={{marginBottom: 10, marginTop: 10}}>Shop By Category</CaptionText>
                <HomePageCategoryList data={merchant.tags} navigation={navigation} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Special Offers</CaptionText>
                <Swipeable data={merchant.storeSp} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Store Specials</CaptionText>
                <StoreSpecialList object={object} isLoading={isLoading}/>
                <Swipeable data={merchant.storeSp} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Deals of the Day</CaptionText>
                <HomePageOffers isLoading={isLoading} />
                <View style={{height: 30}}></View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        merchant: state.merchantReducer.merchant
    }
}

export default connect(mapStateToProps)(HomeTab)
