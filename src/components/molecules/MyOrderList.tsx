import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native';
import Order from '../../models/Order';
import MyOrderListItem from './MyOrderListItem';

export interface Props {
  navigation: any,
  data: Array<Order>
}

const MyOrderList: React.FC<Props> = ({navigation, data}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                return <MyOrderListItem data={item} navigation={navigation} />;
                }}
            />
        </View>
    )
}

export default MyOrderList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginRight: 5,
      marginTop: 5,
    },
  });