import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native';
import Order from '../../models/Order';
import MyOrderListItem from './MyOrderListItem';
import Skeleton from "../atoms/Skeleton";

export interface Props {
  navigation: any,
  data: Array<Order>,
  isLoading: boolean,
  setLastKey: any
}

const MyOrderList: React.FC<Props> = ({navigation, data, isLoading, setLastKey}) => {
    const sample = [1,2,3,4,5];
    return (
        <View style={styles.container}>
          {
            isLoading ?
            <FlatList
              data={sample}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
              return (
                <View style={{width: '100%', flexDirection: 'row', alignItems: 'center',padding: 10, borderRadius: 10}}>
                  <Skeleton height={100} width={100} borderRadius={10} />
                  <View style={{display: "flex", alignItems: "center", marginLeft: 50}}>
                    <Skeleton height={20} width={150} borderRadius={4} style={{margin: 5}}/>
                    <Skeleton height={20} width={120} borderRadius={4} style={{margin: 5}}/>
                  </View>
                </View>
              )
              }}
            /> :
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => {
              return <MyOrderListItem data={item} navigation={navigation} />;
              }}
              onEndReached={({ distanceFromEnd }) => {
                if(distanceFromEnd == 0) {
                  setLastKey(btoa(JSON.stringify(data[data?.length - 1])))
                }
              }}
          />
          }
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