import React, { useState } from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import RoundView from '../../components/atoms/RoundView'
import { BodyText, CaptionText, HeaderText } from '../../components/atoms/Text'

//Redux
import { connect } from 'react-redux'
import { addItem } from '../../redux/actions/cart'

function ItemDetailScreen({route, cart, add}) {

    const data = route.params.item
    const [selected, setSelected] = useState("0")
    const children = () => {
        return data.children.map((element) => {
            return (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setSelected(element.key)}
                    style={{marginHorizontal: 5}}
                >
                    <RoundView style={element.key === selected ? [styles.childContainer, styles.childSelected] : styles.childContainer}>
                        <HeaderText style={element.key === selected ? styles.childSelected : {color: colors.mediumGrey}}>
                            {element.child_name}
                        </HeaderText>
                    </RoundView>
                </TouchableOpacity>
            )
        })
    }
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{padding: 20}}>
                <RoundView style={{width: '100%', height: 250, borderWidth: 1, borderColor: colors.mediumGrey, marginVertical: 5}}>
                    <Image resizeMode="contain" source={{uri: data.image}} style={{width: '100%', height: 200}} />
                </RoundView>
                <CaptionText style={{marginVertical: 5}}>{data.name}</CaptionText>
                <View style={{flexDirection: 'row', marginVertical: 5, alignItems: 'flex-end'}}>
                    <CaptionText>Rs. {data.children[selected].child_price}</CaptionText>
                    {/* <CaptionText style={{textDecorationLine: 'line-through', marginLeft: 20, fontSize: 16}}> Rs. 300 </CaptionText> */}
                </View>
                {/* <HeaderText style={{color: '#007E0D'}}>5% Off</HeaderText> */}
                <CaptionText style={{marginVertical: 5}}>Select Size</CaptionText>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    {children()}
                </View>
                <View style={{width: '100%', height: 1, backgroundColor: colors.grey, marginVertical: 10}} />
                <CaptionText>About the product</CaptionText>
                <Text style={{marginBottom: 50}}>
                    {data.desc}
                </Text>
            </ScrollView>
            <View style={{backgroundColor: 'white', alignItems: 'flex-end', elevation: 11, padding: 10}}>
                <PurpleRoundBtn onPress={() => add(data.key, data)} style={{borderRadius: 10}} gradient text="Add to Cart" />
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (key, item) => dispatch(addItem(key, item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailScreen)

const styles = StyleSheet.create({
    childContainer: {
        borderWidth: 1, 
        backgroundColor: 'white', 
        elevation: 2, 
        padding: 15,
        borderColor: colors.mediumGrey
    },
    childSelected: {
        borderColor: colors.primary,
        color: colors.primary
    }
})