import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity } from 'react-native'
import CategoryPageCategoryList from '../../components/molecules/CategoryPageCategoryList'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import Inventory from '../../models/Inventory'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'

export interface Props {
    navigation: any,
    inventory: Inventory
}
const CategoriesTab: React.FC<Props> = ({navigation, inventory}) => {
    const [tags, setTags] = useState<string[]>([])
    useEffect(() => {
        let tags: string[] = []
        for (let item of inventory.tags) {
            tags = tags.concat(item.tag)
        }
        setTags(tags)
    }, [])
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <TouchableOpacity onPress={() => navigation.push('CategoryList')}
                activeOpacity={0.9}>
                <SearchWithBackground navigation={navigation}/>
            </TouchableOpacity>
            <CategoryPageCategoryList 
                data={tags}
                style={{margin: 10, marginTop: 20, marginBottom: 0, flex: 1}}
                navigation={navigation}
            />
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inventory: state.inventoryReducer.inventory
    }
}

export default connect(mapStateToProps)(CategoriesTab)