import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import colors from '../assets/colors'

const SearchBar = StyleSheet.create({
    background: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: "white",
        borderColor: colors.mediumGrey,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 5
    }
})

export default SearchBar