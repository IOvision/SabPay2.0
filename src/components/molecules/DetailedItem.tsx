import React from 'react';
import {View, Image} from 'react-native';
import {BodyText} from '../atoms/Text';
import {quantityArrayStyle} from '../../styles/FlatListItemStyle';
import RoundView from '../atoms/RoundView';
import colors from '../../assets/colors';

const DetailedItem = ({data}) => {
  const renderItemQuantity = ({item}) => {
    return (
      <View style={quantityArrayStyle.container}>
        <BodyText>{item}</BodyText>
      </View>
    );
  };
 
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
      <RoundView style={{width: '100%', height: 250, borderWidth: 1, borderColor: colors.mediumGrey}}>
        <Image source={data.image} style={{width: '100%', height: 200}} />
      </RoundView>
    </View>
  )
};

export default DetailedItem