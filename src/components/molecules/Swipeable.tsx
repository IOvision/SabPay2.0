import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import { Pages } from 'react-native-pages'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import data from '../../models/testInventory'
const {width} = Dimensions.get('window')

const Swipeable: React.FC = ({isLoading}) => {
    console.log(data.address)
    const [offers, setOffers] = useState(data.sp_offer)
    const children = () => {
        return offers.map((element) => {
            return (
                <Image style={styles.children} source={{uri: element.image}} />
            )
        })
    }
    if(isLoading) {
        return (
            <View style={styles.container}>
                <SkeletonPlaceholder >
                    <View style={{borderRadius: 10, height: 150, width: width-30}} />
                </SkeletonPlaceholder> 
            </View>
        )
    }
    return (
        <View style={styles.container}>
           <Pages>
                {children()}
           </Pages> 
        </View>
    )
}

export default Swipeable

const styles = StyleSheet.create({
    container: {
        height: 150,
        flex: 1,
        marginBottom: 40,
    },
    children: {
        flex: 1, 
        backgroundColor: 'red',
        borderRadius: 10,
        height: 150,
        width: width-30,
    }
})