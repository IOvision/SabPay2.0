import { StyleSheet } from 'react-native'
import colors from '../assets/colors'

export const styles = StyleSheet.create({
    container:{
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors.mediumGrey,
        margin: 20
    },
    subViews: {
        display: "flex",
        flexDirection: "row"
    },
    priceText: {
        display: "flex",
        flex: 1
    },
    horizontalLine: {
        height: 2,
        backgroundColor: "grey",
        display: "flex",
        marginTop: 10,
        marginBottom: 10
    }
}) 
