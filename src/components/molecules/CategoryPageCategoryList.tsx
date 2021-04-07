import React from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import { Divider } from 'react-native-paper';
import CategoryPageCategoryListItem from './CategoryPageCategoryListItem'

export interface Props {
    data: any,
    style: StyleProp<ViewStyle>,
    navigation: any
}
const baseUrl = "https://raw.githubusercontent.com/IOvision/assets/master/images/tags/"
const CategoryPageCategoryList: React.FC<Props> = ({data, style, navigation}) => {
    return (
        <View style={style}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                return <CategoryPageCategoryListItem index={index.toString()} 
                    image={`${baseUrl}${item}.PNG`} 
                    title={item.replace(/_/gi, " ")} 
                    onPress={() => navigation.navigate("Items", {
                        tag: [item]
                    })}/>;
                }}
                ItemSeparatorComponent={() => <Divider style={{marginVertical: 8}} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CategoryPageCategoryList
