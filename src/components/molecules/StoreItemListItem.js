import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import RoundView from '../atoms/RoundView.js'
import { HeaderText, BodyText } from '../atoms/Text.js'
import { storeListItemStyle } from '../../styles/FlatListItemStyle.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from '../../assets/colors'

function StoreItemListItem({navigation}) {
    const [qty, setQty] = useState(1)
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details")} activeOpacity={0.9}>
            <RoundView style={storeListItemStyle.container}>
                <View style={storeListItemStyle.itemImageView}>
                    <Image 
                        style={storeListItemStyle.itemImage}
                        source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsproutsocial.com%2Finsights%2Fsocial-media-image-sizes-guide%2F&psig=AOvVaw1YzM-RjPTcgQGMXHXbVTtv&ust=1604558173182000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiwjZKj6OwCFQAAAAAdAAAAABAD'}}
                    />
                </View>
                <View style={storeListItemStyle.itemDetailsView}>
                    <HeaderText>Ashirwaad Atta</HeaderText>
                    <BodyText>Rs. 285</BodyText>
                    <View style={storeListItemStyle.itemSizeAndQtyView}>
                        <RoundView style={storeListItemStyle.itemSize}>
                            <BodyText>5 Kg</BodyText>
                        </RoundView>
                        


                        <View style={storeListItemStyle.itemQtyView}>
                            <View style={storeListItemStyle.itemQtyIncrease}>
                                <TouchableOpacity onPress={() => setQty(qty + 1)} activeOpacity={0.9}>
                                    <MaterialCommunityIcons name="plus" color={colors.white} size={16} />
                                </TouchableOpacity>
                            </View>
                            <View style={storeListItemStyle.itemQty}>
                                <TouchableOpacity activeOpacity={0.9}>
                                    <BodyText>{qty}</BodyText>
                                </TouchableOpacity>
                            </View>
                            <View style={storeListItemStyle.itemQtyDecrease}>
                            <TouchableOpacity  onPress={() => setQty(qty - 1)} activeOpacity={0.9}>
                                <MaterialCommunityIcons name="minus" color={colors.white} size={16} />
                            </TouchableOpacity>
                            </View>
                        </View>



                        {/* <View style={storeListItemStyle.itemQtyView}>
                            <RoundView style={storeListItemStyle.itemQtyIncrease}>
                                <BodyText>+</BodyText>
                            </RoundView>
                            <RoundView style={storeListItemStyle.itemQty}>
                                <BodyText>11</BodyText>
                            </RoundView>
                            <RoundView style={storeListItemStyle.itemQtyDecrease}>
                                <BodyText>-</BodyText>
                            </RoundView>
                        </View> */}
                    </View>
                </View>
            </RoundView>
        </TouchableOpacity>
    )
}

export default StoreItemListItem
