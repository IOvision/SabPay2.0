import { StyleSheet } from 'react-native'
import Colors from '../assets/colors'

const DrawerHeaderStyle = StyleSheet.create({
    container: {
        height: 210,
        marginTop: -10,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        alignSelf: 'center'
    }
})

export default DrawerHeaderStyle