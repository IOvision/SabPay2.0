import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CaptionText } from '../atoms/Text'
import { CategoryPageCategoryItemStyles } from '../../styles/FlatListItemStyle'
import randomColor, { colorLength } from '../../assets/randomColor';

function CategoryPageCategoryListItem({image, title, onPress}) {
    return (
        <View style={CategoryPageCategoryItemStyles.container}>
            <TouchableOpacity style={CategoryPageCategoryItemStyles.container} onPress={onPress} activeOpacity={0.9}>
            <Image source={image} style={CategoryPageCategoryItemStyles.image} />
            <View style={CategoryPageCategoryItemStyles.textContainer}>
                <CaptionText style={CategoryPageCategoryItemStyles.text}>{title}</CaptionText>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryPageCategoryListItem