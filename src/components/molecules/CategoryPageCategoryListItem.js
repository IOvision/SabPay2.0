import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { CaptionText } from '../atoms/Text'
import { CategoryPageCategoryItemStyles } from '../../styles/FlatListItemStyle'

function CategoryPageCategoryListItem({image, title}) {
    return (
        <View style={CategoryPageCategoryItemStyles.container}>
            <Image source={image} style={CategoryPageCategoryItemStyles.image} />
            <View style={CategoryPageCategoryItemStyles.textContainer}>
                <CaptionText style={CategoryPageCategoryItemStyles.text}>{title}</CaptionText>
            </View>
        </View>
    )
}

export default CategoryPageCategoryListItem