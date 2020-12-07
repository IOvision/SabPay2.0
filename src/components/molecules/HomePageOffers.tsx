import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import styles from '../../styles/HomePageOffersStyles'
import { CaptionText } from '../atoms/Text'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export interface Props {
    isLoading: boolean
}

const HomePageOffers: React.FC<Props> = ({isLoading}) => {
    const {width} = Dimensions.get('window')

    if(isLoading) {
        return (
            <SkeletonPlaceholder>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={{height: 150, width: width/2 -10, marginStart: 5}}/>
                    <View style={{height: 150, width: width/2 -10, marginStart: 5, marginTop: 5}}/>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <View style={{height: 150, width: width/2 -10, marginStart: 5}}/>
                    <View style={{height: 150, width: width/2 -10, marginStart: 5, marginTop: 5}}/>
                </View>
            </SkeletonPlaceholder>
        )
    }
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

export default HomePageOffers