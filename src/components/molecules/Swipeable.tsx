import React from 'react'
import { View, StyleSheet, Image, Dimensions} from 'react-native'
import { Pages } from 'react-native-pages'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const {width} = Dimensions.get('window')

export interface Props {
    data: []
    isLoading: boolean
}

const Swipeable: React.FC<Props> = ({data, isLoading}) => {
    if(isLoading) {
        return (
            <View style={styles.container}>
                <SkeletonPlaceholder >
                    <View style={{borderRadius: 10, height: 150, width: width-30}} />
                </SkeletonPlaceholder> 
            </View>
        )
    }
    const children = () => {
        return data.map((element) => {
            return (
                <Image style={styles.children} source={{uri: `${element}`}} key={element}/> 
            )
        })
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
