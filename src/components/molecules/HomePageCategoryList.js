import React from 'react'
import { View, FlatList } from 'react-native'
import HomePageCategoryItem from './HomePageCategoryListItem.js' 
import randomColor, { colorLength } from '../../assets/randomColor'

function HomePageCategoryList({data, style}) {
    return (
        <View style={style}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                return <HomePageCategoryItem image={item.image} title={item.title} colour={randomColor[(index % colorLength) + 1]} />;
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default HomePageCategoryList
