import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/colors';
import {HeaderText, CustomText} from './../atoms/Text';

export interface Props {
  data: any,
  navigation: any
}

const MyOrderListItem: React.FC<Props> = ({data, navigation}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("OrderDetail")} activeOpacity={0.9} >
      <Image
        source={data.image}
        style={{
          height: 100,
          width: 100,
          borderColor: colors.mediumGrey,
          borderWidth: 1,
          borderRadius: 10,
        }}
      />
      <View style={styles.semiContainer}>
        <HeaderText style={styles.headerText}>{data.status}</HeaderText>
        <CustomText>{data.name}</CustomText>
      </View>
      <Icon
        style={styles.materialIcon}
        name="chevron-right"
        size={24}
        color="grey"
      />
    </TouchableOpacity>
    )
}

export default MyOrderListItem

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderColor: colors.mediumGrey,
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 15,
    },
    materialIcon: {},
    semiContainer: {
      justifyContent: 'center',
    },
    headerText: {
      color: 'grey',
    },
  });