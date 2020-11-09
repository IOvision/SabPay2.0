import * as React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

import ProfileEdit from '../../components/molecules/ProfileEdit'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../assets/colors'
import { Menu, Provider } from 'react-native-paper'

export default function ProfileScreen() {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const sheetRef = React.useRef(null);
  const image = { uri: "https://cdn.amoanimals.com/809a6b6a6e3acc8ccf36d746bf45f7c45758241597977449.jpeg?width=2000&height=3000" };
  return (
    <Provider>
      <ImageBackground source={image} style={styles.image}>
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
        snapPoints={[400, 80, 80]}
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