import React from 'react';
import { View } from 'react-native';
import Background from './src/components/atoms/Background';
import Header from './src/components/atoms/Header';
import HomePageCategoryList from './src/components/molecules/HomePageCategoryList';
import CategoryPageCategoryList from './src/components/molecules/CategoryPageCategoryList';

// const data = [
//   {
//     id: 1,
//     image: require('./src/assets/images/billingHistory.jpg'),
//     title: 'Image 1',
//   },
//   {
//     id: 2,
//     image: require('./src/assets/images/Cauliflower.jpg'),
//     title: 'Image 2',
//   },
//   {
//     id: 3,
//     image: require('./src/assets/images/customerSupport.jpg'),
//     title: 'Image 3',
//   },

//   {
//     id: 4,
//     image: require('./src/assets/images/orderNow.jpg'),
//     title: 'Image 4',
//   },
//   {
//     id: 5,
//     image: require('./src/assets/images/Tomato.jpg'),
//     title: 'Image 5',
//   },
//   {
//     id: 6,
//     image: require('./src/assets/images/potatos.jpg'),
//     title: 'Image 6',
//   },
// ];
export default App = () => {
  return (
    <Background image={require('./src/assets/images/appBackground.png')}>
      <Header image={require('./src/assets/images/logo.png')} />
      <View style={{padding: 10}}>
        {/* <HomePageCategoryList data={data} style={{marginTop: 45}} />
        <CategoryPageCategoryList data={data} /> */}
      </View>
    </Background>
  );
};
