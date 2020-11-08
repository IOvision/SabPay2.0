import * as React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import ProfileEdit from './src/components/molecules/ProfileEdit'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from './src/assets/colors'
import Header from './src/components/atoms/Header'
import { Button, Menu, Divider, Provider } from 'react-native-paper';

export default function App() {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const sheetRef = React.useRef(null);
  const image = { uri: "https://cdn.amoanimals.com/809a6b6a6e3acc8ccf36d746bf45f7c45758241597977449.jpeg?width=2000&height=3000" };
  return (
    <Provider>
      <ImageBackground source={image} style={styles.image}>
        <Header image={require('./src/assets/images/logo.png')} menu={"false"} />
        <View style={styles.menuView}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          theme="white"
          contentStyle={styles.menu}
          anchor={<Icon style={styles.icon} name="dots-vertical" color={Colors.primary} size={54} onPress={openMenu}/>}>
          <Menu.Item titleStyle={{color: Colors.darkgrey}} onPress={() => {}} title="Change Profile Image" />
        </Menu>
        </View>
      </ImageBackground>
      <BottomSheet
        ref={sheetRef}
        //height of bottom sheet, need to be in decreasing order
        snapPoints={[400, 100, 100]}
        borderRadius={20}
        renderContent={ProfileEdit}
      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  icon: {
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "flex-start"
  }, 
  menuView: {
    display: "flex",
    alignSelf: "flex-end",
  },
  menu: {
    backgroundColor: Colors.white,
    display: "flex",
    marginEnd: 30
  }
})