import { StyleSheet } from 'react-native'
import Colors from '../assets/colors'

const DrawerHeaderStyle = StyleSheet.create({
    container: {
        height: 110,
        marginTop: -10,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 40,
        marginTop: 10,
        marginLeft: -10,
        alignSelf: 'center'
    }
})

export default DrawerHeaderStyle