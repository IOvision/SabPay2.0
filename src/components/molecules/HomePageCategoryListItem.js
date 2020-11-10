import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { color } from 'react-native-reanimated';
import { HomePageCategoryListItemStyles } from '../../styles/FlatListItemStyle'
import { HeaderText } from '../atoms/Text';

function HomePageCategoryListItem({image, title, colour}) {
    return (
        <View style={HomePageCategoryListItemStyles.container}>
            <Image source={image} onPress={() => console.log(colour)} style={{...HomePageCategoryListItemStyles.image, backgroundColor: colour}} />
            <View style={HomePageCategoryListItemStyles.textView}>
                <HeaderText>{title}</HeaderText>
            </View>
        </View>
    )
}

export default HomePageCategoryListItem
  