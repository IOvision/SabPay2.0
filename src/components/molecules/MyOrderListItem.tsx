import React from 'react';
import {View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/colors';
import {HeaderText, CustomText} from './../atoms/Text';

export interface Props {
  data: any,
  navigation: any
}

const MyOrderListItem: React.FC<Props> = ({data, navigation}) => {
  console.log("data: " + data)
    return (
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("OrderDetail", {
          data: data
      })} activeOpacity={0.9} >
      <ImageBackground
        source={{uri: data.items[0].image}}
        style={styles.image}
      >
        {
          data.items.length == 1 ? null : (
            <View>
              <View style={styles.overlay} />
              <View style={{backgroundColor: "black", width: 30, opacity: 0.8, alignItems: "center"}}>
                <HeaderText style={{fontSize: 16, color: "white", opacity: 1}}>+ data.items.length-1</HeaderText>
              </View>
            </View>
          )
        }
      </ImageBackground>
      <View style={styles.semiContainer}>
        <HeaderText style={styles.headerText}>{data.status}</HeaderText>
        <CustomText>{data.items[0].name} { data.items.length == 1 ? null : + data.items.length-1 }</CustomText>
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
    image: {
      height: 100,
      width: 100,
      borderColor: colors.mediumGrey,
      borderWidth: 1,
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    materialIcon: {},
    semiContainer: {
      justifyContent: 'center',
    },
    headerText: {
      color: 'grey',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'black',
      opacity: 0.3,
    }
  });