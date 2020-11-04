import { StyleSheet } from 'react-native'

const AppbarStyle = StyleSheet.create({
    container: {
        width: `100%`,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        overflow: 'hidden',
      },
      logo: {
        height: 40,
        width: 40,
        margin: 10,
      },
})

export default AppbarStyle