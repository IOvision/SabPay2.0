import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import randomColor, { colorLength } from '../../assets/randomColor'
import { CaptionText } from '../../components/atoms/Text'
import OfferOnSwipeText from '../../components/atoms/OfferOnSwipeText'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import Merchant from '../../models/Merchant'

export interface Props {
    navigation: any,
    merchant: Merchant
}

const OffersTab: React.FC<Props> = ({navigation, merchant}) => {
    console.log("offers" + merchant.offers)
    const data = ["https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/Jupiter20/Phase4/SBC/DryFruits.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/Jupiter20/Phase4/SBC/xcm_banners_02_phase4-sbc_440x460_in-en.jpg.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/Jupiter20/Phase4/SBC/superfoods.jpg"]
    const [empty, setEmpty] = useState(data ? false : true) 
    return (
        <View style={styles.container}>
            <View style={{zIndex: 1}}><SearchWithBackground navigation={navigation}/></View>
            {
                empty ? (
                    <View style={styles.textContainer}><CaptionText style={{margin: 10}}>Currently there are no offers :(</CaptionText></View>
                ) : (
                    <Swiper
                        cards={data}
                        backgroundColor={'#ffffff'}
                        animateCardOpacity={true}
                        onSwipedLeft={() => console.log("Left")}
                        onSwipedRight={() => console.log("Right")}
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
                        renderCard={(card) => {
                            return (
                                <View style={styles.card}>
                                    <Image style={styles.image} source={{uri: card}} />
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
        merchant: state.merchantReducer.merchant
    }
}

export default connect(mapStateToProps)(OffersTab)

const styles = StyleSheet.create({
    container: {
        display: "flex", flex: 1, backgroundColor: "white", borderRadius: 20
    },
    card: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: randomColor[Math.floor(Math.random() * colorLength)],
        marginBottom: 120,
        marginTop: 50
      },
      image: {display: "flex", justifyContent: "center", alignSelf: "center"},
      textContainer: {
          flex: 1,
          alignItems : 'center',
          justifyContent : 'center'
      }
  });

