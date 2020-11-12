import React from 'react'
import { View, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native'
import Swipeable from '../../components/molecules/Swipeable'
import { BodyText, CaptionText, HeaderText } from '../../components/atoms/Text'
import HomePageCategoryList from '../../components/molecules/HomePageCategoryList'
import StoreSpecialList from '../../components/molecules/StoreSpecialList'
import HomePageOffers from '../../components/molecules/HomePageOffers'
import SearchBar from '../../components/molecules/SearchBar'
import colors from '../../assets/colors'

const {width} = Dimensions.get('window')
const HomeTab = () => {
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
    const data = [
        {
            title: "Groceries & Staples",
            image: require('../../assets/images/grocery.png')
        },
        {
            title: "Packaged Food",
            image: require('../../assets/images/PackagedFoods.png')
        },
        {
            title: "Groceries & Staples",
            image: require('../../assets/images/HouseholdCare.png')
        },
        {
            title: "Groceries & Staples",
            image: require('../../assets/images/HouseholdCare.png')
        },
        {
            title: "Groceries & Staples",
            image: require('../../assets/images/HouseholdCare.png')
        },
        {
            title: "Groceries & Staples",
            image: require('../../assets/images/HouseholdCare.png')
        }
    ]
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{
                backgroundColor: colors.primary, 
                width: width/2,
                height: 130,
                marginTop: -75,
                borderRadius: 50,
                position: 'absolute',
                alignSelf:'center',
                transform: [
                    {scaleX: 2.5}
                ]
            }} />
            <SearchBar placeholder="What are you looking for?" style={{marginHorizontal: 20, marginTop: 30, marginBottom: 5}} onChangeText={(text) => console.log(text)} />
            <ScrollView style={{display: "flex", flex: 1, padding: 15, backgroundColor: "white"}}>
                <CaptionText style={{marginBottom: 10, marginTop: 10}}>Shop By Category</CaptionText>
                <HomePageCategoryList data={data} />
                <CaptionText style={{marginBottom: 10}}>Special Offers</CaptionText>
                <Swipeable />
                <CaptionText style={{marginBottom: 10}}>Store Specials</CaptionText>
                <StoreSpecialList object={object} />
                <Swipeable />
                <CaptionText style={{marginBottom: 10}}>Deals of the Day</CaptionText>
                <HomePageOffers />
                <View style={{height: 30}}></View>
            </ScrollView>
        </View>
    )
}

export default HomeTab
