import React from 'react'
import { View, StyleSheet } from 'react-native'
import InputText from '../../components/atoms/InputText'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import EmptyCartSvg from '../../assets/svg/EmptyCartSvg'


export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <EmptyCartSvg />
      <InputText placeholder="name" />
      <InputText placeholder="phone" />
      <InputText placeholder="address" />
      <PurpleRoundBtn text="Save" style={styles.btn}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    display: "flex",
    flex: 1
  },
  btn: {
    margin: 20,
    alignSelf: "center",
    paddingHorizontal: 40
  }
})

