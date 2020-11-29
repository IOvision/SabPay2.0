import React from 'react';
import {View, Image, Text} from 'react-native';
import HorizontalList from './HorizontalList';
import {DetailedItemStyle} from './../../styles/DetailedItemStyles';
import {HeaderText, CustomText, BodyText} from '../atoms/Text';
import {quantityArrayStyle} from '../../styles/FlatListItemStyle';
import RoundView from '../atoms/RoundView';
import colors from '../../assets/colors';

const DetailedItem = ({data}) => {
  //---------------------------------------------------------------------------------
  //need to be outside not in and should be entered in <DetailedItem renderItem={}/>
  // for reusability
  //---------------------------------------------------------------------------------
  const renderItemQuantity = ({item}) => {
    return (
      <View style={quantityArrayStyle.container}>
        <BodyText>{item}</BodyText>
      </View>
    );
  };
 

  // return (
  //   <View style={DetailedItemStyle.container}>
  //     <View style={DetailedItemStyle.imageContainer}>
  //       <Image source={data.image} style={DetailedItemStyle.image} />
  //     </View>
  //     <HeaderText style={DetailedItemStyle.name}>{data.name}</HeaderText>
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         width: '100%',
  //         justifyContent: 'flex-start',
  //         height: 20,
  //         marginVertical: 5,
  //       }}>
  //       <CustomText style={DetailedItemStyle.price}>{data.price}</CustomText>
  //       <CustomText style={DetailedItemStyle.strikePrice}>
  //         {data.strikePrice}
  //       </CustomText>
  //     </View>
  //     <CustomText style={DetailedItemStyle.percent}>
  //       {data.percent}% Off
  //     </CustomText>
  //     <HeaderText style={DetailedItemStyle.name}>Select Size</HeaderText>

  //     <HorizontalList
  //       data={data.quantityArray}
  //       renderItem={renderItemQuantity}
  //       style={DetailedItemStyle.flatList}
  //     />
  //     <View style={DetailedItemStyle.line} />
  //     {
  //       data.itemDetail ? (
  //         <View>
  //           <HeaderText style={DetailedItemStyle.name}>About the Product</HeaderText>
  //           <Text style={DetailedItemStyle.detail}>{data.itemDetail}</Text>
  //         </View>
  //       ) : (
  //         null
  //       )
  //     }
  //   </View>
  // );
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
      <RoundView style={{width: '100%', height: 250, borderWidth: 1, borderColor: colors.mediumGrey}}>
        <Image source={data.image} style={{width: '100%', height: 200}} />
      </RoundView>
    </View>
  )
};

export default DetailedItem