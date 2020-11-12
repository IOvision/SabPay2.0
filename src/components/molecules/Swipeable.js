import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import { Pages } from 'react-native-pages'

const {width} = Dimensions.get('window')

export default function Swipeable() {
    return (
        <View style={styles.container}>
            <Pages>
                <Image style={styles.children} source={require("../../assets/images/Cauliflower.jpg")}/>
                <Image style={styles.children} source={require("../../assets/images/Cauliflower.jpg")} />
                <Image style={styles.children} source={require("../../assets/images/Cauliflower.jpg")} />
            </Pages>
        </View>
    )
}

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