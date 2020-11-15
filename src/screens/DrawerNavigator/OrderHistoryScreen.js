import React from 'react'
import { View, StyleSheet } from 'react-native'
import MyOrderList from '../../components/molecules/MyOrderList'
import colors from '../../assets/colors'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

export default function OrderHistoryScreen() {
    return (
        <View style={styles.container}>
            <SearchWithBackground />
            <MyOrderList />
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