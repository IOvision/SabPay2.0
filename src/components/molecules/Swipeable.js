import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { Pages } from 'react-native-pages'

export default function Swipeable() {
    return (
        <View style={styles.container}>
            <Pages style={styles.children}>
                <Image style={styles.children} source={require("../../assets/images/Cauliflower.jpg")}/>
                <Image style={styles.children} source={require("../../assets/images/Cauliflower.jpg")} />
                <Image style={styles.children} source={require("../../assets/images/Cauliflower.jpg")} />
            </Pages>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "25%",
        borderRadius: 10,
        flex: 1
    },
    children: {
        flex: 1, 
        backgroundColor: 'red', 
        borderRadius: 10
    }
})