import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/colors';
import {HeaderText, CustomText} from './../atoms/Text';

export default function MyOrderListItem({data}) {
    return (
<View style={styles.container}>
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
    </View>
    )
}

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