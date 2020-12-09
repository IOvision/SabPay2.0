import React from 'react';
import {View, Image} from 'react-native';
import { colorsType } from '../../assets/colors';
import {StoreSpecialListItemStyles} from '../../styles/FlatListItemStyle';
import {BodyText} from '../atoms/Text';

export interface Props {
    image: string,
    title: string,
    price: string,
    color: colorsType
}

const StoreSpecialListItem: React.FC<Props> = ({image, title, price, color}) => {
  return (
    <View style={StoreSpecialListItemStyles.container}>
      <View style={StoreSpecialListItemStyles.containerView}>
        <Image source={{uri: image}} style={{...StoreSpecialListItemStyles.image, backgroundColor: color}} />
        <BodyText style={StoreSpecialListItemStyles.text}>{title}</BodyText>
        <BodyText style={StoreSpecialListItemStyles.price}>{price}</BodyText>
      </View>
    </View>
  );
}

export default StoreSpecialListItem;
