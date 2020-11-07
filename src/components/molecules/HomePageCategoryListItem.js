import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { HomePageCategoryListItemStyles } from '../../styles/FlatListItemStyle'
import { BodyText } from '../atoms/Text';

function HomePageCategoryListItem({image, title}) {
    return (
        <View style={HomePageCategoryListItemStyles.container}>
            <Image source={image} style={HomePageCategoryListItemStyles.image} />
            <View style={HomePageCategoryListItemStyles.textView}>
                <BodyText style={HomePageCategoryListItemStyles.text}>{title}</BodyText>
            </View>
        </View>
    )
}

export default HomePageCategoryListItem
  