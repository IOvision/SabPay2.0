import React, { useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import InputText from '../../components/atoms/InputText'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import ProfilePageSvg from '../../assets/svg/ProfilePageSvg'
import Background from '../../components/atoms/Background'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { CaptionText, HeaderText } from '../../components/atoms/Text'
import Login from '../../components/molecules/Login'
import BottomSheet from 'reanimated-bottom-sheet';
import User from '../../models/User'
import { ActivityIndicator } from 'react-native-paper'



export interface Props {
  isSignedIn: boolean,
  user: User
}

const ProfileScreen: React.FC<Props> = ({isSignedIn, user}) => {
  const sheetRef = useRef(null)
  
  const [name, setName] = useState(user ? user.username : undefined)
  const [phone, setPhone] = useState(user ? user.phoneNumber : undefined)
  const [address, setAddress] = useState(user ? user.address[0] : undefined)

  const [isLoading, setIsLoading] = useState(false)

  const closeBottomSheet = () => {
    sheetRef.current.snapTo(2)
  }

  const handleContinue = () => (
      <Login close={closeBottomSheet} />
  )

  const validateEmail = (email: string) => {
    var re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/; 
    return re.test(email);
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator />
        <HeaderText style={{textAlign: 'center', marginTop: 20}}>Making changes...</HeaderText>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Background />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ProfilePageSvg />
      </View>
      {
        isSignedIn ? (
          <View style={{flex: 1}}>
            <InputText placeholder="name" value={name} editable={true} onChangeText={setName} />
            <InputText placeholder="phone" value={phone} editable={false} onChangeText={setPhone} />
            <InputText placeholder="address" value={address} editable={false} />
            <PurpleRoundBtn text="Save" style={styles.btn} />
          </View>
        ) : (
          <View style={{flex: 1, margin: -20}}>
            <CaptionText style={{alignSelf: "center", marginTop: 30}}>You are currently not logged In</CaptionText>
            <PurpleRoundBtn text="Log In" style={styles.btn} onPress={() => sheetRef.current.snapTo(0)}/>
            <BottomSheet
              initialSnap={2}
              ref={sheetRef}
              snapPoints={['30%', '30%', 0]}
              borderRadius={10}
              renderContent={handleContinue}
            />
          </View>
        )
      }
    </View>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
      isSignedIn: state.userReducer.signedIn,
      user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(ProfileScreen)


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

