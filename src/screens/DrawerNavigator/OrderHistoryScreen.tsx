import React, { useEffect, useState, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import MyOrderList from '../../components/molecules/MyOrderList'
import colors from '../../assets/colors'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import { getOrders } from '../../requests'
import { RootState } from '../../redux/store'
import { connect } from 'react-redux'
import User from '../../models/User'
import { Auth } from 'aws-amplify'
import { CaptionText } from '../../components/atoms/Text'
import Login from '../../components/molecules/Login'
import BottomSheet from 'reanimated-bottom-sheet';
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'

export interface Props {
    navigation: any,
    user: User
}

const OrderHistoryScreen: React.FC<Props> = ({navigation, user}) => {
    const [order, setOrder] = useState([])
    const [lastKey, setLastKey] = useState("null")
    const [isLoading, setIsLoading] = useState(true)
    const sheetRef = useRef(null)

    const closeBottomSheet = () => {
        sheetRef.current.snapTo(2)
    }

    const handleContinue = () => (
        <Login close={closeBottomSheet} />
    )
    useEffect(() => {
        Auth.currentSession()
        .then(data => {
            console.log("data: " + data.getIdToken().getJwtToken())
            getOrders(user.phoneNumber.substr(3), lastKey, (err, resp) => {
                if(err) 
                  return console.log(err)
                  setOrder(resp)
                  setIsLoading(false)
                  console.log(resp[0])
              })
        })
        .catch(err => {
            setOrder([])
            console.log(err)
        })
    }, [])
    return (
        <View style={styles.container}>
            <SearchWithBackground navigation={navigation}/>
            {
                user == null ? (
                    <View style={{flex: 1, justifyContent: 'center', margin: -10}}>
                        <CaptionText style={{alignSelf: "center", marginTop: 30}}>You are currently not logged In</CaptionText>
                        <PurpleRoundBtn text="Log In" style={styles.btn} onPress={() => sheetRef.current.snapTo(0)}/>
                        <BottomSheet
                        initialSnap={2}
                        ref={sheetRef}
                        snapPoints={['47%', '47%', 0]}
                        borderRadius={10}
                        renderContent={handleContinue}
                        />
                    </View>
                ) : <MyOrderList navigation={navigation} data={order} isLoading={isLoading} setLastKey={setLastKey} />
            }
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        user: state.userReducer.user
    }
}

export default connect(mapStateToProps)(OrderHistoryScreen)


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      color: colors.background,
    },
    btn: {
        margin: 20,
        alignSelf: "center",
        paddingHorizontal: 40
    }
  });