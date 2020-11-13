import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { CaptionText } from '../atoms/Text'
import { CategoryPageCategoryItemStyles } from '../../styles/FlatListItemStyle'
import randomColor, { colorLength } from '../../assets/randomColor';

function CategoryPageCategoryListItem({image, title, onPress, index}) {
    return (
        <View style={{ ...CategoryPageCategoryItemStyles.container, backgroundColor: randomColor[index % colorLength]}}>
            <TouchableOpacity activeOpacity={0.9} style={CategoryPageCategoryItemStyles.container} onPress={onPress}>
            <Image source={image} style={CategoryPageCategoryItemStyles.image} />
            <View style={CategoryPageCategoryItemStyles.textContainer}>
                <CaptionText style={CategoryPageCategoryItemStyles.text}>{title}</CaptionText>
            </View>
            </TouchableOpacity>
            {/* <ImageBackground source={image} style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{backgroundColor: 'white', paddingVertical: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
                    <CaptionText style={{textAlign: 'center'}}>{title}</CaptionText>
                </View>
            </ImageBackground> */}
        </View>
    )
}

export default CategoryPageCategoryListItem