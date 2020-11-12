import { StyleSheet } from 'react-native'
import Colors from '../assets/colors'

const DrawerHeaderStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -10,
        backgroundColor: Colors.primary,
        justifyContent: 'flex-start',
        padding: 10
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