import { StyleSheet, ViewStyle } from 'react-native'
import colors from '../assets/colors'

interface Style {
    background: ViewStyle
}

const SearchBar = StyleSheet.create<Style>({
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