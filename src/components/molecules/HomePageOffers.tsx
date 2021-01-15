import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import styles from '../../styles/HomePageOffersStyles'
import { CaptionText } from '../atoms/Text'
import Skeleton from "../atoms/Skeleton";

export interface Props {
    isLoading: boolean,
    data: Array<string>
}

const HomePageOffers: React.FC<Props> = ({isLoading, data}) => {
    const {width} = Dimensions.get('window')

    if(isLoading) {
        return (
            <View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Skeleton width={width/2 -10} height={150} style={{marginStart: 5}}/>
                    <Skeleton height={150} width={width/2 -10} style={{marginStart: 5, marginTop: 5}}/>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Skeleton height={150} width={width/2 -10} style={{marginStart: 5}}/>
                    <Skeleton height={150} width={width/2 -10} style={{marginStart: 5, marginTop: 5}}/>
                </View>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.container1}>
                <View style={styles.view1}>
                    <Image resizeMode='contain' source={{uri: data[0]}} style={styles.image}/>
                </View>
                <View style={styles.view2}>
                    <Image resizeMode='contain' source={{uri: data[1]}} style={styles.image}/>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.view3}>
                    <Image resizeMode='contain' source={{uri: data[2]}} style={styles.image}/>
                </View>
                <View style={styles.view4}>
                    <Image resizeMode='contain' source={{uri: data[3]}} style={styles.image}/>
                </View>
            </View>
            <View style={styles.circleView}>
            <CaptionText style={{color: "white"}}>Offers</CaptionText>
            </View>
        </View>
    )
}

export default HomePageOffers