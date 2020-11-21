import React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import RoundView from '../../components/atoms/RoundView'
import { BodyText, CaptionText, HeaderText } from '../../components/atoms/Text'

const data =
        {
            image: require('../../assets/images/Cauliflower.jpg'),
            name: "Aloo",
            price: "29",
            strikePrice: "20",
            percent: "1",
            quantityArray: ["1", "2"],
        }
export default function ItemDetailScreen() {
    
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{padding: 20}}>
                <RoundView style={{width: '100%', height: 250, borderWidth: 1, borderColor: colors.mediumGrey, marginVertical: 5}}>
                    <Image source={data.image} style={{width: '100%', height: 200}} />
                </RoundView>
                <CaptionText style={{marginVertical: 5}}>Aashirvaad Whole Wheat Atta</CaptionText>
                <View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'flex-end'}}>
                    <CaptionText>Rs. 285</CaptionText>
                    <CaptionText style={{textDecorationLine: 'line-through', marginLeft: 20, fontSize: 16}}> Rs. 300 </CaptionText>
                </View>
                <HeaderText style={{color: '#007E0D'}}>5% Off</HeaderText>
                <CaptionText style={{marginVertical: 5}}>Select Size</CaptionText>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <RoundView style={{borderWidth: 1, backgroundColor: colors.lightGrey, elevation: 5, borderColor: colors.primary}}><HeaderText style={{color: colors.primary}}>5 Kg</HeaderText></RoundView>
                    <RoundView style={{borderWidth: 1, backgroundColor: colors.lightGrey, elevation: 5, marginLeft: 5}}><HeaderText>10 Kg</HeaderText></RoundView>
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: colors.grey, marginVertical: 10}} />
                <CaptionText>About the product</CaptionText>
                <Text style={{marginBottom: 50}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus, mi nec convallis mollis, tellus metus iaculis mi, quis viverra purus justo ac est. Nulla ac risus felis. Sed eget diam a quam accumsan iaculis. Curabitur dignissim nisl eros, eu placerat justo laoreet eget. Nam metus sapien, congue sed hendrerit eu, egestas id lectus. Nam ullamcorper lorem tortor. Nulla posuere risus placerat, facilisis felis sed, dignissim nisi. Sed accumsan venenatis ipsum ac pellentesque. Nulla facilisi. Vivamus sit amet arcu nec dolor posuere efficitur. Morbi ultricies erat sit amet nisl luctus tristique. Curabitur risus augue, auctor eu pulvinar at, euismod sit amet lacus.
                    Phasellus faucibus imperdiet augue ac faucibus. Nam nunc justo, pretium sit amet pharetra id, suscipit at sem. Cras elementum nunc ut ligula porttitor tempor. Curabitur eget laoreet lorem. Vivamus pretium sapien ligula, eu fermentum nisi efficitur ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut elementum est ut tincidunt pharetra.
                </Text>
            </ScrollView>
            <View style={{backgroundColor: 'white', alignItems: 'flex-end', elevation: 11, padding: 10}}>
                <PurpleRoundBtn style={{borderRadius: 10}} gradient text="Add to Cart" />
            </View>
        </View>
    )
}
