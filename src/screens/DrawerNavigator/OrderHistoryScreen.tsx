import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MyOrderList from '../../components/molecules/MyOrderList'
import colors from '../../assets/colors'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import { getOrders } from '../../requests'
import { RootState } from '../../redux/store'
import { connect } from 'react-redux'
import User from '../../models/User'
import { Auth } from 'aws-amplify'

export interface Props {
    navigation: any,
    user: User
}

const OrderHistoryScreen: React.FC<Props> = ({navigation, user}) => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        console.log("Lets start")
        Auth.currentSession()
        .then(data => {
            console.log("data: " + data.getIdToken().getJwtToken())
            getOrders(user.getPhone(), data.getIdToken().getJwtToken(), (err, resp) => {
                if(err) 
                  return console.log(err)
                  setOrder(resp)
                return console.log("data"+ Object.keys(resp[0]))
              })
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <View style={styles.container}>
            <SearchWithBackground navigation={navigation}/>
            <MyOrderList navigation={navigation} data={order}/>
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
  });