import React, { useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import InputText from '../../components/atoms/InputText'
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import ProfilePageSvg from '../../assets/svg/ProfilePageSvg'
import Background from '../../components/atoms/Background'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { CaptionText } from '../../components/atoms/Text'
import Login from '../../components/molecules/Login'
import BottomSheet from 'reanimated-bottom-sheet';
import User from '../../models/User'



export interface Props {
  isSignedIn: boolean,
  user: User
}

const ProfileScreen: React.FC<Props> = ({isSignedIn, user}) => {
  const sheetRef = useRef(null)

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
  return (
    <View style={styles.container}>
      <Background />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ProfilePageSvg />
      </View>
      {
        isSignedIn ? (
          <View style={{flex: 1}}>
            <InputText placeholder="name" value={user.username} editable={true}/>
            <InputText placeholder="phone" value={user.phoneNumber} editable={false}  />
            <InputText placeholder="address" value={user.address[0]} />
            <PurpleRoundBtn text="Save" style={styles.btn} editable={true} />
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

