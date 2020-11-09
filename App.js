import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import ListItemSeparator from './src/components/molecules/lists/ListItemSeparator';
import ListItem from './src/components/molecules/lists/ListItem';
import DetailedItem from './src/components/molecules/DetailedItem';

// const data = [{title: 'one'}, {title: 'one'}, {title: 'one'}, {title: 'one'}];

// const data = {
//   image: require('./src/assets/images/potatos.jpg'),
//   name: 'Mr. Potato for Sale',
//   price: 'Rs 326',
//   strikePrice: 'Rs 500',
//   percent: '50',
//   quantityArray: ['5 kg', '10 kg'],
//   itemDetail:
//     'Fugiat ex eu fugiat magna. Consequat cupidatat aliquip enim fugiat eu ullamco ipsum culpa excepteur sunt mollit nulla. Aliquip laborum non consequat esse qui qui. Duis nulla excepteur et reprehenderit elit irure proident. Cupidatat qui ut sint incididunt ullamco quis incididunt culpa velit exercitation elit eu dolore sit.',
// };

export default App = () => {
  return (
    <View style={styles.container}>
      {/* <DetailedItem data={data} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
