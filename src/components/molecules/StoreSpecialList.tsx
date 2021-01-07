import React from 'react'
import { FlatList, View } from 'react-native'
import StoreSpecialListItem from '../molecules/StoreSpecialListItem'
import randomColor, { colorLength } from '../../assets/randomColor'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export interface Props {
    object: Object,
    // isLoading: boolean
}


const StoreSpecialList: React.FC<Props> = ({object, isLoading}) => {

    // const sample = [1,2,3,4,5];
    // if(isLoading) {
    //     return (
    //         <FlatList
    //             horizontal
    //             data={sample}
    //             keyExtractor={(item, index) => index.toString()}
    //             showsHorizontalScrollIndicator={false}
    //             ItemSeparatorComponent={() => { return (
    //                 <View style={{width: 25}}></View>
    //             )}}
    //             renderItem={({item, index}) => {
    //             return (
    //                 <SkeletonPlaceholder >
    //                     <View style={{alignItems: "center"}}>
    //                         <View style={{borderRadius: 10, height: 120, width: 120}} />
    //                         <View style={{ marginTop: 4, width: 120, height: 20, borderRadius: 4 }}/>
    //                         <View style={{ marginTop: 4, width: 70, height: 20, borderRadius: 4, marginBottom: 20 }}/>
    //                     </View>
    //                 </SkeletonPlaceholder>
    //             )
    //             }}
    //         />
    //     )
    // }
    return (
        <FlatList
            horizontal
            data={object}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
            return <StoreSpecialListItem image={item.image} title={item.title} price={item.price} color={randomColor[(index % colorLength) + 1]}/>
        }}/>
    )
}

export default StoreSpecialList