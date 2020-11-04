import { StyleSheet } from 'react-native'

export const shopListItemstyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 100,
        display: "flex",
        flexDirection: "row",
        padding: 14
    },
    shopImage: {
        display: "flex",
        width: 72, 
        height: 72, 
        backgroundColor: "blue",
        borderRadius: 10
    },
    shopInfo: {
        display: "flex",
        justifyContent: "center",
        marginStart: 15
    },
    stars: {

    }
}) 
