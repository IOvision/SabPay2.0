import React, { useState } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import randomColor from '../../assets/randomColor'
import { CaptionText } from '../../components/atoms/Text'
import OfferOnSwipeText from '../../components/atoms/OfferOnSwipeText'

const OffersTab = () => {
    const data = [require('../../assets/images/jam.png'), require('../../assets/images/pads.png'), require('../../assets/images/jam.png'), require('../../assets/images/pads.png')]
    // const data = []
    const [empty, setEmpty] = useState(data ? false : true) 
    return (
        <View style={styles.container}>
            {
                empty ? (
                    <CaptionText style={{margin: 10}}>There are no offers</CaptionText>
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
                                    <Image style={styles.image} source={card} />
                                </View>
                            )
                        }} 
                    />
                )
            }
        </View>
    )
}

export default OffersTab

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
        backgroundColor: randomColor[Math.floor(Math.random() * 10)],
        marginBottom: 100
      },
      image: {display: "flex", justifyContent: "center", alignSelf: "center"}
  });
