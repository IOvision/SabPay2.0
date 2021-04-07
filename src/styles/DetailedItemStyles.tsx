import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import colors from '../assets/colors';

interface Style {
  container: ViewStyle,
  imageContainer: ViewStyle,
  image: ViewStyle,
  name: TextStyle,
  price: TextStyle,
  strikePrice: TextStyle,
  percent: TextStyle,
  flatList: ViewStyle,
  line: ViewStyle,
  detail: TextStyle
}

export const DetailedItemStyle = StyleSheet.create<Style>({
  container: 
  {
    flex: 1,
    padding: 10,
    marginTop: 10
  },
  imageContainer: {
    display: "flex",
    flex: 1,
    width: '90%',
    height: 300,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    padding: 13,
    borderColor: colors.mediumGrey
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  name: {
    color: colors.mediumGrey,
    fontWeight: 'bold',
    marginVertical: 10},
  price: {
    color: colors.mediumGrey,
    fontWeight: 'bold',
  },
  strikePrice: {
    textDecorationLine: 'line-through',
    color: colors.mediumGrey,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  percent: {
    color: colors.green, 
    marginBottom: 10
  },
  flatList: {
    marginVertical: 10,
    width: '100%',
    height: 50,
  },
  line: {height: 2, backgroundColor: colors.mediumGrey, marginBottom: 10},
  detail: {marginTop: 10},
});
