import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import colors from '../assets/colors'

interface Style {
    container: ViewStyle,
    subViews: ViewStyle,
    priceText: TextStyle,
    horizontalLine: ViewStyle
}

export const styles = StyleSheet.create<Style>({
    container:{
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors.mediumGrey,
        borderRadius: 10
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
        height: 1,
        backgroundColor: colors.mediumGrey,
        display: "flex",
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: -20
    }
}) 
