import React from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import CategoryPageCategoryListItem from './CategoryPageCategoryListItem.js'

export interface Props {
    data: any,
    style: StyleProp<ViewStyle>,
}

const CategoryPageCategoryList: React.FC<Props> = ({data, style, navigation}) => {
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
