import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import SearchBar from '../../components/atoms/SearchBar'

import CategoryPageCategoryList from '../../components/molecules/CategoryPageCategoryList'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

const data = [
    {
        image: require('../../assets/images/grocery.png'),
        title: "Groceries and Staples"
    },
    {
        image: require('../../assets/images/PackagedFoods.png'),
        title: "Packaged Food"
    },
    {
        image: require('../../assets/images/HouseholdCare.png'),
        title: "Household Care"
    }
]

const { width, height } = Dimensions.get('window')
const CategoriesTab = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <TouchableOpacity onPress={() => navigation.push('CategoryList')}
                activeOpacity={0.9}>
                <SearchWithBackground />
            </TouchableOpacity>
            <CategoryPageCategoryList 
                data={data}
                style={{margin: 10, marginTop: 20, marginBottom: 0, flex: 1}}
                navigation={navigation}
            />
        </View>
    )
}

export default CategoriesTab
