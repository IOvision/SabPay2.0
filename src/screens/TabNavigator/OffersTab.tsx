import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import randomColor, { colorLength } from '../../assets/randomColor'
import { BodyText, CaptionText, HeaderText } from '../../components/atoms/Text'
import OfferOnSwipeText from '../../components/atoms/OfferOnSwipeText'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import Inventory from '../../models/Inventory'
import { addItem } from '../../redux/actions/cart'
import CartItem from '../../models/CartItem'

export interface Props {
    navigation: any,
    inventory: Inventory,
    addToCart: (item: CartItem, selected: number) => void
}

const OffersTab: React.FC<Props> = ({navigation, inventory, addToCart}) => {
    const [empty, setEmpty] = useState(inventory.offers ? false : true) 
    return (
        <View style={styles.container}>
            <View style={{zIndex: 1}}><SearchWithBackground navigation={navigation}/></View>
            {
                empty ? (
                    <View style={styles.textContainer}><CaptionText style={{margin: 10}}>Currently there are no offers :(</CaptionText></View>
                ) : (
                    <Swiper
                        cards={inventory.offers}
                        backgroundColor={'#ffffff'}
                        animateCardOpacity={true}
                        onSwipedLeft={() => console.log("Left")}
                        onSwipedRight={(card) => addToCart(new CartItem(inventory.offers[card], 0), 0)}
                        onSwipedAll={() => setEmpty(true)}
                        verticalSwipe={false}
                        outputRotationRange={["10deg", "0deg", "-10deg"]}
                        overlayLabels={{
                            left: {
                              title: 'DISCARD',
                              element: <OfferOnSwipeText text="DISCARD" />,
                              style: {
                                wrapper: {...styles.overlayWrapper,
                                alignItems: 'flex-end'
                                }
                              },
                            },
                            right: {
                               title: 'CONFIRM',
                               element: <OfferOnSwipeText text="CONFIRM" />,
                               style: {
                                    wrapper: {
                                    ...styles.overlayWrapper,
                                    alignItems: 'flex-start',
                                    },
                                },
                            },
                        }}
                        renderCard={(item) => {
                            return (
                                <View style={styles.card}>
                                    <Image style={styles.image} source={{uri: item.image}} />
                                    <View style={{backgroundColor: '#00000080', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 10}}>
                                        <HeaderText style={{fontSize: 24}}>{item.name}</HeaderText>
                                        <View style={{flexDirection: 'row'}}>
                                            <BodyText style={{textDecorationLine: 'line-through', fontSize: 18}}>Rs. {item.child[0].price}</BodyText>
                                            <BodyText style={{color: 'light-green', fontSize: 18, marginLeft: 10}}>Rs. {item.child[0].discountPrice}</BodyText>
                                        </View>
                                    </View>
                                </View>
                            )
                        }} 
                    />
                )
            }
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        inventory: state.inventoryReducer.inventory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (item: CartItem) => dispatch(addItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OffersTab)

const styles = StyleSheet.create({
    container: {
        display: "flex", flex: 1, backgroundColor: "white", borderRadius: 20
    },
    card: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "space-between",
        backgroundColor: randomColor[Math.floor(Math.random() * colorLength)],
        marginBottom: 120,
        marginTop: 50
      },
      image: {
          display: "flex", 
          justifyContent: "center", 
          alignSelf: "center",
          marginTop: 50,
          width: 200,
          height: 200
        },
      textContainer: {
          flex: 1,
          alignItems : 'center',
          justifyContent : 'center'
      }
  });

