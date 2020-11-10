import React from 'react';
import {View, Image} from 'react-native';
import {StoreSpecialListItemStyles} from '../../styles/FlatListItemStyle';
import {BodyText} from '../atoms/Text';

function StoreSpecialListItem({image, title, price, color}) {
  return (
    <View style={StoreSpecialListItemStyles.container}>
      <View style={StoreSpecialListItemStyles.containerView}>
        <Image source={image} style={{...StoreSpecialListItemStyles.image, backgroundColor: color}} />
        <BodyText style={StoreSpecialListItemStyles.text}>{title}</BodyText>
        <BodyText style={StoreSpecialListItemStyles.price}>{price}</BodyText>
      </View>
    </View>
  );
}

export default StoreSpecialListItem;
