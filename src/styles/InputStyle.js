import { StyleSheet } from 'react-native'
import colors from '../assets/colors'

const InputStyle = StyleSheet.create({
    background: {
        flexDirection: 'row',
        backgroundColor: colors.lightGrey,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'space-between',
        padding: 5
    },
    placeholder: {
        padding: 5,
        color: '#6E6E6E',
        fontWeight: 'bold',
    },
    text: {
        padding: 5,
        color: colors.primary,
        fontWeight: 'bold',
    },
    error: {
        borderColor: 'red',
        borderWidth: 1
    }
})

export default InputStyle