import React from 'react';
import {View, Image, Text} from 'react-native';
import HorizontalList from './HorizontalList';
import {DetailedItemStyle} from './../../styles/DetailedItemStyles';
import {HeaderText, CustomText, BodyText} from '../atoms/Text';
import {quantityArrayStyle} from '../../styles/FlatListItemStyle';

export default DetailedItem = ({data, renderItem}) => {
  //---------------------------------------------------------------------------------
  //need to be outside not in and should be entered in <DetailedItem renderItem={}/>
  // for reusability
  //---------------------------------------------------------------------------------
  // const renderItemQuantity = ({item}) => {
  //   return (
  //     <View style={quantityArrayStyle.container}>
  //       <BodyText>{item}</BodyText>
  //     </View>
  //   );
  // };

  return (
    <View style={DetailedItemStyle.container}>
      <View style={DetailedItemStyle.imageContainer}>
        <Image source={data.image} style={DetailedItemStyle.image} />
      </View>
      <HeaderText style={DetailedItemStyle.name}>{data.name}</HeaderText>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-start',
          height: 20,
          marginVertical: 5,
        }}>
        <CustomText style={DetailedItemStyle.price}>{data.price}</CustomText>
        <CustomText style={DetailedItemStyle.strikePrice}>
          {data.strikePrice}
        </CustomText>
      </View>
      <CustomText style={DetailedItemStyle.percent}>
        {data.percent}% Off
      </CustomText>
      <HeaderText style={DetailedItemStyle.name}>Select Size</HeaderText>

      <HorizontalList
        data={data.quantityArray}
        renderItem={renderItemQuantity}
        style={DetailedItemStyle.flatList}
      />
      <View style={DetailedItemStyle.line} />
      <HeaderText style={DetailedItemStyle.name}>About the Product</HeaderText>
      <Text style={DetailedItemStyle.detail}>{data.itemDetail}</Text>
    </View>
  );
};

//For Testing :
// const data = {
//   image: require('./src/assets/images/potatos.jpg'),
//   name: 'Mr. Potato for Sale',
//   price: 'Rs 326',
//   strikePrice: 'Rs 500',
//   percent: '50',
//   quantityArray: ['5 kg', '10 kg'],
//   itemDetail:
//     'Fugiat ex eu fugiat magna. Consequat cupidatat aliquip enim fugiat eu ullamco ipsum culpa excepteur sunt mollit nulla. Aliquip laborum non consequat esse qui qui. Duis nulla excepteur et reprehenderit elit irure proident. Cupidatat qui ut sint incididunt ullamco quis incididunt culpa velit exercitation elit eu dolore sit.',
// };
