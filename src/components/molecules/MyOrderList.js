import React from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native';
import MyOrderListItem from './MyOrderListItem';

export default function MyOrderList({navigation}) {
    const data = [
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginRight: 5,
      marginTop: 5,
    },
  });