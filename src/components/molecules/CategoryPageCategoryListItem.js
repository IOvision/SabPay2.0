import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { CaptionText } from '../atoms/Text'
import { CategoryPageCategoryItemStyles } from '../../styles/FlatListItemStyle'
import randomColor, { colorLength } from '../../assets/randomColor';

function CategoryPageCategoryListItem({image, title, index}) {
    return (
        <View style={{ ...CategoryPageCategoryItemStyles.container, backgroundColor: randomColor[index%colorLength] }}>
            <Image source={image} style={CategoryPageCategoryItemStyles.image} />
            <View style={CategoryPageCategoryItemStyles.textContainer}>
                <CaptionText style={CategoryPageCategoryItemStyles.text}>{title}</CaptionText>
            </View>
        </View>
    )
}

export default CategoryPageCategoryListItem