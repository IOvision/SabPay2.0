import React from 'react';
import {View, TouchableOpacity, Image, GestureResponderEvent} from 'react-native';
import { HomePageCategoryListItemStyles } from '../../styles/FlatListItemStyle'
import { HeaderText } from '../atoms/Text';

export interface Props {
    image: string,
    title: {
        title: string,
        tag: string[]
    },
    colour: string,
    onPress: (event: GestureResponderEvent) => void
}

const HomePageCategoryListItem: React.FC<Props> = ({image, title, colour, onPress}) => {
    return (
        <TouchableOpacity style={HomePageCategoryListItemStyles.container} onPress={onPress} activeOpacity={0.9}>
            <Image source={{uri: image}} style={{...HomePageCategoryListItemStyles.image, backgroundColor: colour}} />
            <View style={HomePageCategoryListItemStyles.textView}>
                <HeaderText style={{textAlign: 'center', fontSize: 14}}>{title}</HeaderText>
            </View>
        </TouchableOpacity>
    )
}

export default HomePageCategoryListItem
  