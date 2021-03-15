import React from 'react'
import {View, FlatList, StyleProp, ViewStyle} from 'react-native';
import { Divider } from 'react-native-paper';
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
                    image={"https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"} 
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
