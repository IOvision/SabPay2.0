import React from 'react'
import { View, StyleSheet } from 'react-native'
import MyOrderList from '../../components/molecules/MyOrderList'
import colors from '../../assets/colors'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'

export interface Props {
    navigation: any
}

const OrderHistoryScreen: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SearchWithBackground navigation={navigation}/>
            <MyOrderList navigation={navigation}/>
        </View>
    )
}

export default OrderHistoryScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      color: colors.background,
    },
  });