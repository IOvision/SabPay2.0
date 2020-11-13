import React from 'react'
import {View, FlatList} from 'react-native';
import CategoryPageCategoryListItem from './CategoryPageCategoryListItem.js'

function CategoryPageCategoryList({data, style, navigation}) {
    return (
        <View style={style}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return <CategoryPageCategoryListItem index={index} image={item.image} title={item.title} onPress={() => navigation.navigate("Items")}/>;
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryPageCategoryList
