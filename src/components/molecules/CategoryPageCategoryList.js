import React from 'react'
import {View, FlatList} from 'react-native';
import CategoryPageCategoryListItem from './CategoryPageCategoryListItem.js'

function CategoryPageCategoryList({data, style, navigation}) {
    return (
        <View style={style}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                return <CategoryPageCategoryListItem image={item.image} title={item.title} onPress={() => navigation.navigate("Items")}/>;
                }}
            />
        </View>
    )
}

export default CategoryPageCategoryList
