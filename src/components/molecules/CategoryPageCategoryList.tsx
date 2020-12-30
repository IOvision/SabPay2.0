import React from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import CategoryPageCategoryListItem from './CategoryPageCategoryListItem'

export interface Props {
    data: any,
    style: StyleProp<ViewStyle>,
    navigation: any
}

const CategoryPageCategoryList: React.FC<Props> = ({data, style, navigation}) => {
    return (
        <View style={style}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return <CategoryPageCategoryListItem index={index.toString()} 
                    image={"https://raw.githubusercontent.com/IOvision/assets/master/images/Bakery%20and%20Dairy/amul_butter.JPG"} 
                    title={item} 
                    onPress={() => navigation.navigate("Items", {
                        tag: item.title
                    })}/>;
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryPageCategoryList
