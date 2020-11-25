import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import MyOrderList from '../../components/molecules/MyOrderList'
import colors from '../../assets/colors'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

export default function OrderHistoryScreen({navigation}) {
    return (
        <View style={styles.container}>
            <SearchWithBackground navigation={navigation}/>
            <MyOrderList navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      color: colors.background,
    },
  });