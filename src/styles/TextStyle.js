import { StyleSheet } from 'react-native'
import Colors from '../assets/colors'

const TextStyles = StyleSheet.create({
    headerText: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 2          
    },
    bodyText: {
        fontSize: 14,
        fontWeight: "400",
        maxWidth: 250,
        marginBottom: 4
    },
    captionText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 2,
        color: Colors.darkgrey
    },
    offerText: {
        fontSize: 12,
        fontWeight: "400",
        maxWidth: 250,
        marginBottom: 4,
        color: "green"
    }
})
export default TextStyles