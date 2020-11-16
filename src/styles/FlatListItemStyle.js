import {StyleSheet} from 'react-native';
import colors from '../assets/colors';

export const shopListItemstyles = StyleSheet.create({
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
  stars: {},
});

export const storeListItemStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    marginVertical: 10
  },
  itemImageView: {
    width: 90,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b1b1b1',
    padding: 10,
  },
  itemImage: {
    display: 'flex',
    backgroundColor: 'red',
    flex: 1,
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    width: 35,
    height: 35,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
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

export const CategoryPageCategoryItemStyles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        width: '100%',
        height: 200,
        // marginBottom: 10,
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

export const HomePageCategoryListItemStyles = StyleSheet.create({
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

export const CartItemListItemStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    marginBottom: -10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.mediumGrey,
    borderRadius: 10
  },
  infoView: {
    display: 'flex',
    flex: 1,
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
    backgroundColor: colors.lightGrey, padding: 5, borderRadius: 10, width: 40, alignItems: "center", borderColor: colors.mediumGrey
  },
  img: {
    display: 'flex',
    width: 90,
    height: 90,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  itemQtyView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  },
  itemQty: {
    borderColor: colors.grey,
    width: 25,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export const StoreSpecialListItemStyles = StyleSheet.create({
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
  },
  text: {
    fontWeight: 'bold',
    fontSize: 13,
    color: colors.medium,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 11,
    color: colors.medium,
  },
});

export const quantityArrayStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: colors.medium,
    marginRight: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
});
