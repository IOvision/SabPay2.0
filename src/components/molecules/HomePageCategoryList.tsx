import React from 'react'
import { View, FlatList, ViewStyle, Text } from 'react-native'
import HomePageCategoryItem from './HomePageCategoryListItem' 
import randomColor, { colorLength } from '../../assets/randomColor'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export interface Props {
    data: any,
    style?: ViewStyle,
    navigation: any,
    isLoading: boolean
}

const HomePageCategoryList: React.FC<Props> = ({data, style, navigation, isLoading}) => {
    const sample = [1,2,3,4,5];
    if(isLoading) {
        return (
            <FlatList
                horizontal
                data={sample}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => { return (
                    <View style={{width: 10}}></View>
                )}}
                renderItem={({item, index}) => {
                return (
                    <SkeletonPlaceholder >
                        <View style={{ width: 100, height: 100, borderRadius: 10 }} />
                        <View style={{ marginTop: 4, width: 100, height: 20, borderRadius: 4, marginBottom: 20 }}/>
                    </SkeletonPlaceholder>
                )
                }}
            />
        )
    }
    return (
        <View style={style}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                return <HomePageCategoryItem 
                    image={item.image} 
                    title={item.title} 
                    tag={item.tag} 
                    colour={randomColor[(index % colorLength) + 1]} 
                    onPress={() => navigation.navigate("Items", {
                        tag: item.tag
                    })} 
                />;
                }}
            />
        </View>
    )
}

export default HomePageCategoryList
