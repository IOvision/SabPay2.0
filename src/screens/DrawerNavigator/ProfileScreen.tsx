import React from 'react'
import { View, StyleSheet } from 'react-native'
import InputText from '../../components/atoms/InputText'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import ProfilePageSvg from '../../assets/svg/ProfilePageSvg'
import Background from '../../components/atoms/Background'


const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Background />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ProfilePageSvg />
      </View>
      <View style={{flex: 1}}>
        <InputText placeholder="name" error={true} />
        <InputText placeholder="phone" />
        <InputText placeholder="address" />
        <PurpleRoundBtn text="Save" style={styles.btn}/>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    display: "flex",
    flex: 1,
  },
  btn: {
    margin: 20,
    alignSelf: "center",
    paddingHorizontal: 40
  }
})

