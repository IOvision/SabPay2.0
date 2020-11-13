import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { color } from 'react-native-reanimated';
import { HomePageCategoryListItemStyles } from '../../styles/FlatListItemStyle'
import { HeaderText } from '../atoms/Text';

function HomePageCategoryListItem({image, title, colour, onPress}) {
    return (
        <TouchableOpacity style={HomePageCategoryListItemStyles.container} onPress={onPress} activeOpacity={0.9}>
            <Image source={image} style={{...HomePageCategoryListItemStyles.image, backgroundColor: colour}} />
            <View style={HomePageCategoryListItemStyles.textView}>
                <HeaderText style={{textAlign: 'center', fontSize: 14}}>{title}</HeaderText>
            </View>
        </TouchableOpacity>
    )
}

export default HomePageCategoryListItem
  