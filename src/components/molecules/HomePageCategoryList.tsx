import React from 'react'
import { View, FlatList, ViewStyle } from 'react-native'
import HomePageCategoryItem from './HomePageCategoryListItem' 
import randomColor, { colorLength } from '../../assets/randomColor'
import Skeleton from "../atoms/Skeleton";

export interface Props {
    data: string[],
    style?: ViewStyle,
    navigation: any,
    // isLoading: boolean,
    baseUrl: string
}

const HomePageCategoryList: React.FC<Props> = ({data, style, navigation, isLoading, baseUrl}) => {
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
                    <View >
                        <Skeleton width={100} height={100} borderRadius={10} />
                        <Skeleton width={100} height={20} borderRadius={4} style={{ marginTop: 4, marginBottom: 20 }}/>
                    </View>
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
                    image={`${baseUrl}/cat/${item.title}`} 
                    title={item.title} 
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
