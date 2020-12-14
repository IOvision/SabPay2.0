import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import CategoryPageCategoryList from '../../components/molecules/CategoryPageCategoryList'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import Merchant from '../../models/Merchant'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'

const data = [
    {
        image: "https://as1.ftcdn.net/jpg/02/49/26/28/500_F_249262814_LpzzpJ27F8K1EHfcAEZBMi31YRZmCsBN.jpg",
        title: "Groceries and Staples"
    },
    {
        image: "https://globe-net.com/wp-content/uploads/packaging-1.jpg",
        title: "Packaged Food"
    },
    {
        image: "https://www.expertmarketresearch.com/files/images/Top-Household-Care-Products-Manufacturers-in-the-World.jpg",
        title: "Household Care"
    }
]

export interface Props {
    navigation: any,
    merchant: Merchant
}
const CategoriesTab: React.FC<Props> = ({navigation, merchant}) => {

    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <TouchableOpacity onPress={() => navigation.push('CategoryList')}
                activeOpacity={0.9}>
                <SearchWithBackground navigation={navigation}/>
            </TouchableOpacity>
            <CategoryPageCategoryList 
                data={merchant.tags}
                style={{margin: 10, marginTop: 20, marginBottom: 0, flex: 1}}
                navigation={navigation}
            />
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        merchant: state.merchantReducer.merchant
    }
}

export default connect(mapStateToProps)(CategoriesTab)