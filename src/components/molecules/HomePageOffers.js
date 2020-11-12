import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import styles from '../../styles/HomePageOffersStyles'
import { CaptionText } from '../atoms/Text'

export default function HomePageOffers() {
    return (
        <View>
            <View style={styles.container1}>
                <View style={styles.view1}>
                    <Image resizeMode='contain' source={require('../../assets/images/maggi.png')} style={styles.image}/>
                </View>
                <View style={styles.view2}>
                    <Image resizeMode='contain' source={require('../../assets/images/ice-cream.png')} style={styles.image}/>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.view3}>
                    <Image resizeMode='contain' source={require('../../assets/images/pads.png')} style={styles.image}/>
                </View>
                <View style={styles.view4}>
                    <Image resizeMode='contain' source={require('../../assets/images/jam.png')} style={styles.image}/>
                </View>
            </View>
            <View style={styles.circleView}>
            <CaptionText style={{color: "white"}}>Offers</CaptionText>
            </View>
        </View>
    )
}