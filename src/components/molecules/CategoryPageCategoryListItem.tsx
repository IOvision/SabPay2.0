import React from 'react';
import {View, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { BodyText } from '../atoms/Text'
import colors from '../../assets/colors';

export interface Props {
    image: string,
    title: string,
    onPress: (event: GestureResponderEvent) => void
    index: string
}

const CategoryPageCategoryListItem: React.FC<Props> = ({image, title, onPress, index}) => {
    return (
        // <View style={{ ...CategoryPageCategoryItemStyles.container, backgroundColor: randomColor[index % colorLength]}}>
        //     <TouchableOpacity activeOpacity={0.9} style={CategoryPageCategoryItemStyles.container} onPress={onPress}>
        //         <Image source={{uri: image}} style={CategoryPageCategoryItemStyles.image} />
        //         <View style={CategoryPageCategoryItemStyles.textContainer}>
        //             <CaptionText style={CategoryPageCategoryItemStyles.text}>{title}</CaptionText>
        //         </View>
        //     </TouchableOpacity>
        // </View>
        <View style={{borderWidth: 1, borderRadius: 10, borderColor: colors.grey}}>
            <TouchableOpacity onPress={onPress}>
                <Image source={{uri: image}} style={{height: 170, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10}} />
                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', height: 40}}>
                    <BodyText style={{fontSize: 20}}>{title}</BodyText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryPageCategoryListItem