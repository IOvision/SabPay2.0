import React from 'react'
import { FlatList, View } from 'react-native'
import StoreSpecialListItem from '../molecules/StoreSpecialListItem'
import randomColor, { colorLength } from '../../assets/randomColor'
import Skeleton from "../atoms/Skeleton";
import Item from "../../models/Item";

export interface Props {
    object: Item[],
    // isLoading: boolean
}


const StoreSpecialList: React.FC<Props> = ({object, isLoading}) => {

    const sample = [1,2,3,4,5];
    if(isLoading) {
        return (
            <FlatList
                horizontal
                data={sample}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => { return (
                    <View style={{width: 25}}></View>
                )}}
                renderItem={({item, index}) => {
                return (
                    <View >
                        <View style={{alignItems: "center"}}>
                            <Skeleton borderRadius={10} height={120} width={120} />
                            <Skeleton width={120} height={20} borderRadius={4} style={{ marginTop: 4 }}/>
                            <Skeleton width={70} height={20} borderRadius={4} style={{ marginTop: 4, marginBottom: 20 }}/>
                        </View>
                    </View>
                )
                }}
            />
        )
    }
    return (
        <FlatList
            horizontal
            data={object}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
            return <StoreSpecialListItem item={item} color={randomColor[(index % colorLength) + 1]}/>
        }}/>
    )
}

export default StoreSpecialList