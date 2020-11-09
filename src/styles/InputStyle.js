import { StyleSheet } from 'react-native'
import colors from '../assets/colors'

const InputStyle = StyleSheet.create({
    background: {
        backgroundColor: colors.lightGrey,
        height: 50,
        borderRadius: 10,
        marginTop: 10
    },
    placeholder: {
        padding: 10,
        color: '#6E6E6E',
        fontWeight: 'bold',
    },
    text: {
        padding: 10,
        color: colors.primary,
        fontWeight: 'bold'
    }
})

export default InputStyle