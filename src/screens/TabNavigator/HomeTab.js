import React, { useState } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import Swipeable from '../../components/molecules/Swipeable'
import { CaptionText } from '../../components/atoms/Text'
import HomePageCategoryList from '../../components/molecules/HomePageCategoryList'
import StoreSpecialList from '../../components/molecules/StoreSpecialList'
import HomePageOffers from '../../components/molecules/HomePageOffers'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

import inventory from '../../models/testInventory'

const {width} = Dimensions.get('window')
const HomeTab = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true)
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
            <SearchWithBackground home={true} navigation={navigation} name={inventory.name} address={inventory.address}/>
            <ScrollView style={{display: "flex", flex: 1, padding: 15, backgroundColor: "white"}}>
                <CaptionText style={{marginBottom: 10, marginTop: 10}}>Shop By Category</CaptionText>
                <HomePageCategoryList data={inventory.tags} navigation={navigation} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Special Offers</CaptionText>
                <Swipeable data={inventory.sp_offer} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Store Specials</CaptionText>
                <StoreSpecialList object={object} isLoading={isLoading}/>
                <Swipeable isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Deals of the Day</CaptionText>
                <HomePageOffers isLoading={isLoading} isLoading={isLoading}/>
                <View style={{height: 30}}></View>
            </ScrollView>
        </View>
    )
}

export default HomeTab
