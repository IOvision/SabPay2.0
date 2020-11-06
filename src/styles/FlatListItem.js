import { StyleSheet } from 'react-native'
import colors from '../assets/colors'

export const shopListItemstyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 100,
        display: "flex",
        flexDirection: "row",
        padding: 14
    },
    shopImage: {
        display: "flex",
        width: 72, 
        height: 72, 
        backgroundColor: "blue",
        borderRadius: 10
    },
    shopInfo: {
        display: "flex",
        justifyContent: "center",
        marginStart: 15
    },
    stars: {

    }
}) 

export const CategoryPageCategoryItemStyles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        width: '100%',
        height: 200,
        marginBottom: 40,
      },
      image: {
        width: `100%`,
        height: 200,
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.medium,
      },
      textContainer: {
        alignItems: 'center',
        backgroundColor: colors.white,
        position: 'absolute',
        padding: 13,
        bottom: -20,
        width: '100%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.medium,
      },
})

export const HomePageCategoryListItemStyles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    marginBottom: 40,
    alignItems: 'center',
    marginEnd: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textView: {
      marginTop: 5,
      width: 80,
      display: "flex",
      alignItems: "center"
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.medium,
  },
})