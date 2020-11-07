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

export const storeListItemStyle = StyleSheet.create({
  container: {
      display: "flex",
      flexDirection: "row"
  },
  itemImageView: {
      width: 90,
      height: 100,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#b1b1b1',
      padding: 10
  },
  itemImage: {
      display: "flex",
      backgroundColor: "red",
      flex: 1
  },
  itemDetailsView: {
      marginLeft: 15,
      flex: 1
  },
  itemSizeAndQtyView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15
  },
  itemSize: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#bbbbbb',
      width: 35,
      height: 35,
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#e2e2e2",
  },
  itemQtyView: {
      display: "flex",
      flexDirection: "row",
      marginRight: 30
  },
  itemQty: {
      borderRadius: 10,
      width: 30,
      height: 35,
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f6f6f6"
  },
  itemQtyIncrease: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#bbbbbb',
      width: 30,
      height: 35,
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "purple"
  },
  itemQtyDecrease: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#bbbbbb',
      width: 30,
      height: 35,
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "purple"
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

export const CartItemListItemStyles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.medium,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  infoView: {
      display: "flex",
      flex: 1
  },
  subView: {
      display: "flex",
      flexDirection: "row",
  },
  discountView: {
      display: "flex", 
      flexDirection: "row",
      alignItems: "center"
  },
  originalPrice: {
      fontSize: 10,
      fontWeight: "400",
      color: "black",
      textDecorationLine: 'line-through', 
      textDecorationStyle: 'solid',
      marginHorizontal: 10
  },
  img: {
      display: "flex",
      width: 90, 
      height: 90, 
      backgroundColor: "blue",
      borderRadius: 10
  },
  itemQtyView: {
      display: "flex",
      flexDirection: "row",
      marginRight: 30
  },
  itemQty: {
      borderRadius: 10,
      width: 30,
      height: 35,
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f6f6f6"
  },
  itemQtyIncrease: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#bbbbbb',
      width: 30,
      height: 35,
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "purple"
  },
  itemQtyDecrease: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#bbbbbb',
      width: 30,
      height: 35,
      padding: 0,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "purple"
  } 
})