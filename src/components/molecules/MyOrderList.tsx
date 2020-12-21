import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native';
import Order from '../../models/Order';
import MyOrderListItem from './MyOrderListItem';

export interface Props {
  navigation: any,
  data: Array<Order>
}

const MyOrderList: React.FC<Props> = ({navigation, data}) => {
    const data1 = [
        {
          id: 1,
          image: require('../../assets/images/jam.png'),
          status: 'Out For Delivery',
          name: 'Ashirvaad Aata',
        },
        {
          id: 2,
          image: require('../../assets/images/jam.png'),
          status: 'For Delivery',
          name: 'Ashirvaad Aata',
        },
        {
          id: 3,
          image: require('../../assets/images/jam.png'),
          status: 'Gone Delivery',
          name: 'Ashirvaad Aata',
        },
        {
          id: 4,
          image: require('../../assets/images/jam.png'),
          status: 'Delivery',
          name: 'Ashirvaad Aata',
        },
      ];
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