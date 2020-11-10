import React from 'react'
import { View, StyleSheet } from 'react-native'
import Swipeable from '../../components/molecules/Swipeable'
import { CaptionText } from '../../components/atoms/Text'
import HomePageCategoryList from '../../components/molecules/HomePageCategoryList'

const HomeTab = () => {
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
        <View style={{display: "flex", flex: 1, padding: 15}}>
            <CaptionText style={{marginBottom: 10}}>Shop By Category</CaptionText>
            <HomePageCategoryList data={data} />
            <CaptionText style={{marginBottom: 10}}>Special Offers</CaptionText>
            <Swipeable />
            <Swipeable />
        </View>
    )
}

export default HomeTab


