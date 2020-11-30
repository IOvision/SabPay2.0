import React from 'react'
import { View, FlatList, ViewStyle } from 'react-native'
import HomePageCategoryItem from './HomePageCategoryListItem' 
import randomColor, { colorLength } from '../../assets/randomColor'

export interface Props {
    data: any,
    style: ViewStyle,
}

const HomePageCategoryList: React.FC<Props> = ({data, style, navigation}) => {
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
