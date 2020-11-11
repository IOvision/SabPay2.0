import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import colors from '../../assets/colors'
import SearchBar from '../../components/molecules/SearchBar'

import CategoryPageCategoryList from '../../components/molecules/CategoryPageCategoryList'

const data = [
    {
        image: require('../../assets/images/Cauliflower.jpg'),
        title: "Cauliflower"
    },
    {
        image: require('../../assets/images/Cauliflower.jpg'),
        title: "Cauliflower"
    },
    {
        image: require('../../assets/images/Cauliflower.jpg'),
        title: "Cauliflower"
    }
]

const { width, height } = Dimensions.get('window')
const CategoriesTab = ({navigation}) => {

    const [search, setSearch] = React.useState(false)

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
            <SearchBar
                placeholder="Search"
                style={{marginTop: 50, marginHorizontal: 20}}
                onFocus={() => setSearch(true)}
            />
            {
                search ? (
                    null
                ) : <CategoryPageCategoryList 
                data={data}
                style={{margin: 10, marginTop: 20, marginBottom: 0, flex: 1}}
                navigation={navigation}
            />
            }
        </View>
    )
}

export default CategoriesTab
