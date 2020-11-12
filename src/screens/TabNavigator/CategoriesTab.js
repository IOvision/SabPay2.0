import React from 'react'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import SearchBar from '../../components/molecules/SearchBar'

import CategoryPageCategoryList from '../../components/molecules/CategoryPageCategoryList'

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
        <View style={{flex: 1}}>
            <View style={{
                backgroundColor: colors.primary, 
                width: width/2,
                height: 150,
                marginTop: -75,
                borderRadius: 50,
                position: 'absolute',
                alignSelf:'center',
                transform: [
                    {scaleX: 2.5}
                ]
            }} />
            <TouchableOpacity onPress={() => navigation.push('CategoryList')}>
                <SearchBar
                    placeholder="Search"
                    style={{marginTop: 50, marginHorizontal: 20}}
                    editable={false}
                />
            </TouchableOpacity>
            <CategoryPageCategoryList 
                data={data}
                style={{margin: 10, marginTop: 20, marginBottom: 0, flex: 1}}
            />
        </View>
    )
}

export default CategoriesTab
