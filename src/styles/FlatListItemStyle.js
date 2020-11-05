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
export const storeListItemStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row"
    },
    itemImageView: {
        width: 90,
        height: 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#b1b1b1',
        padding: 10
    },
    itemImage: {
        display: "flex",
        backgroundColor: "red",
        flex: 1
    },
    itemDetailsView: {
        marginLeft: 15,
        flex: 1
    },
    itemSizeAndQtyView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    itemSize: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbbbbb',
        width: 35,
        height: 35,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e2e2e2",
    },
    itemQtyView: {
        display: "flex",
        flexDirection: "row",
        marginRight: 30
    },
    itemQty: {
        borderRadius: 10,
        width: 30,
        height: 35,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f6f6"
    },
    itemQtyIncrease: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbbbbb',
        width: 30,
        height: 35,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "purple"
    },
    itemQtyDecrease: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbbbbb',
        width: 30,
        height: 35,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "purple"
    }
})