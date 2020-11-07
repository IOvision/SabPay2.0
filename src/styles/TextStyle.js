import {StyleSheet} from 'react-native';
import colors from '../assets/colors';

const TextStyles = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  bodyText: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: 250,
    marginBottom: 4,
  },
  captionText: {
    //pg8
  },
  offerText: {
    fontSize: 12,
    fontWeight: '400',
    maxWidth: 250,
    marginBottom: 4,
    color: 'green',
  },
  customText: {
    fontWeight: 'bold',
    color: colors.medium,
    fontSize: 12,
  },
});
export default TextStyles;
