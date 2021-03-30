import { StyleSheet, ViewStyle, TextStyle, ImageProps, ImageStyle } from 'react-native';
import colors from '../assets/colors';

interface StyleShopListItem {
  container: ViewStyle,
  shopImage: ViewStyle,
  shopInfo: TextStyle
}

export const shopListItemstyles = StyleSheet.create<StyleShopListItem>({
  container: {
    backgroundColor: 'white',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    padding: 14,
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    marginTop: 5
  },
  shopImage: {
    display: 'flex',
    width: 72,
    height: 72,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  shopInfo: {
    display: 'flex',
    justifyContent: 'center',
    marginStart: 15,
  },
});

interface StyleStoreListItem {
  container: ViewStyle,
  itemImageView: ViewStyle,
  itemImage: ImageProps,
  itemDetailsView: ViewStyle,
  itemSizeAndQtyView: ViewStyle,
  itemSize: ViewStyle,
  itemQtyView: ViewStyle,
  itemQty: ViewStyle,
  itemQtyIncrease: ViewStyle,
  itemQtyDecrease: ViewStyle,
}

export const storeListItemStyle = StyleSheet.create<StyleStoreListItem>({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  itemImageView: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#b1b1b1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImage: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 9,
    resizeMode: 'contain'
  },
  itemDetailsView: {
    marginLeft: 15,
    flex: 1,
  },
  itemSizeAndQtyView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  itemSize: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    height: 35,
    padding: 5,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    maxWidth: 60,
    overflow: "hidden"
  },
  itemQtyView: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 30,
  },
  itemQty: {
    borderRadius: 5,
    width: 30,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
  },
  itemQtyIncrease: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    width: 30,
    height: 35,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  itemQtyDecrease: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    width: 30,
    height: 35,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});

interface StyleCategoryPageCategoryItem {
    container: ViewStyle,
    image: ViewStyle,
    text: TextStyle,
    textContainer: ViewStyle
}

export const CategoryPageCategoryItemStyles = StyleSheet.create<StyleCategoryPageCategoryItem>({
    container: {
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        width: '100%',
        height: 200,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: colors.mediumGrey
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
        color: colors.darkgrey,
      },
      textContainer: {
        alignItems: 'center',
        backgroundColor: colors.white,
        position: 'absolute',
        padding: 13,
        bottom: -20,
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.mediumGrey,
      },
})

interface StyleHomePageCategoryListItem {
  container: ViewStyle,
  image: ViewStyle,
  textView: ViewStyle
}

export const HomePageCategoryListItemStyles = StyleSheet.create<StyleHomePageCategoryListItem>({
  container: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    marginBottom: 30,
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
    display: 'flex',
    alignItems: 'center',
  },
})

interface StyleItemQuantityButtonStyle {
  itemQtyView: ViewStyle,
  itemQty: ViewStyle,
  itemQtyIncrease: ViewStyle,
  itemQtyDecrease: ViewStyle,
  touchableForIncDec: ViewStyle
}

export const ItemQuantityButtonStyle = StyleSheet.create<StyleItemQuantityButtonStyle>({
  itemQtyView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  itemQty: {
    width: 25,
    paddingVertical: 0,
    backgroundColor: colors.mediumGrey,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemQtyIncrease: {
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  itemQtyDecrease: {
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  touchableForIncDec: {
    borderRadius: 5,
    width: 25, 
    height: 32, 
    justifyContent: "center", 
    alignItems: "center"
  }
})

interface StyleCartItemListItem {
  container: ViewStyle,
  infoView: ViewStyle,
  subView: ViewStyle,
  discountView: ViewStyle,
  originalPrice: TextStyle,
  weight: ViewStyle,
  img: ImageStyle
}

export const CartItemListItemStyles = StyleSheet.create<StyleCartItemListItem>({
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    marginBottom: -10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    borderRadius: 10,
    justifyContent: 'space-between'
  },
  infoView: {
    justifyContent: 'center',
  },
  subView: {
    display: 'flex',
    flexDirection: 'row',
  },
  discountView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginHorizontal: 10,
  },
  weight: {
    backgroundColor: colors.lightGrey, 
    padding: 5, 
    marginTop: 10, 
    width: 60, 
    borderRadius: 4, 
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center'
  },
  img: {
    display: 'flex',
    width: 90,
    height: 90,
    backgroundColor: 'blue',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.mediumGrey
  }
});

interface StyleStoreSpecialListItem {
    container: ViewStyle,
    image: ViewStyle,
    containerView: ViewStyle,
    text: TextStyle,
    price: TextStyle
}

export const StoreSpecialListItemStyles = StyleSheet.create<StyleStoreSpecialListItem>({
  container: {
    marginBottom: 40,
    alignItems: 'center',
    marginEnd: 20,
    borderWidth: 2,
    borderColor: colors.lightGrey,
    borderRadius: 10,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom:  5
  },
  containerView: {
    width: 120,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13,
    color: "black"
  },
  price: {
    fontWeight: 'bold',
    fontSize: 11,
    color: "black",
  },
});

interface StyleQuantityArray {
  container: ViewStyle
}

export const quantityArrayStyle = StyleSheet.create<StyleQuantityArray>({
  container: {
    borderRadius: 10,
    borderColor: colors.mediumGrey,
    marginRight: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
});
