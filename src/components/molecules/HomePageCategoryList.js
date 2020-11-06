import React from 'react'
import { View, FlatList } from 'react-native'
import HomePageCategoryItem from './HomePageCategoryListItem.js' 

function HomePageCategoryList({data, style}) {
    return (
        <View style={style}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                return <HomePageCategoryItem image={item.image} title={item.title} />;
                }}
            />
        </View>
    )
}

export default HomePageCategoryList
