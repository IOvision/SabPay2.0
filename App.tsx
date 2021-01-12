//React
import React from 'react';
import Colors from './src/assets/colors'
import {
  Dimensions,
  View,
} from 'react-native';
import Root from './src/navigation/Root'
import SplashScreen from 'react-native-splash-screen'

//Amplify
import Amplify, { Auth } from 'aws-amplify'
import awsConfig from './aws-exports'
import AmplifyStorage from './src/models/AmplifyStorage';
import { signIn } from './src/redux/actions/user';
import { connect } from 'react-redux';
import User from './src/models/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Merchant from './src/models/Merchant';
import { setMerchant } from './src/redux/actions/merchant';
import { BodyText } from './src/components/atoms/Text';
import NetInfo from '@react-native-community/netinfo';

Amplify.configure(awsConfig)
Auth.configure({
  storage: AmplifyStorage
})

export interface Props {
  setSignedIn: (user: User) => void,
  setMerchant: (merchant: Merchant) => void
}
export interface State {
  isLoading: boolean,
  internet: boolean
}

const {width, height} = Dimensions.get('window')

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      internet: true
    }
  }

  getUserData = () => new Promise((resolve, reject) => {
    AsyncStorage.getItem('@User')
    .then(data => {
      if(data) this.props.setSignedIn(User.fromString(data))
      resolve(true)
    })
    .catch(err => reject(err))
  })

  getMerchantData = () => new Promise((resolve, reject) => {
    AsyncStorage.getItem('@Merchant')
    .then(data => {
      if (data) this.props.setMerchant(Merchant.fromString(data))
      resolve(true)
    })
    .catch(err => reject(err))
  })

  componentDidMount() {
    Promise.all([this.getUserData(), this.getMerchantData()])
    .then(data => {
      this.setState({
        isLoading: false
      })
      SplashScreen.hide()
    })
    .catch(err => console.log(err))
    NetInfo.addEventListener(network => {
     this.setState({
       ...this.state,
       internet: network.isConnected
     })
    })
  }

  render () {
    if(!this.state.isLoading)
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <Root />
        { this.state.internet ? (
          null
        ) : (
          <View style={{position: 'absolute', flex: 1, width: width, height: height}}>
          <View style={{flex: 1, backgroundColor: 'black', opacity: 0.5}} />
          <View style={{
            position: 'absolute', 
            width: width/2, 
            height: height/3, 
            backgroundColor: 'white', 
            alignSelf: 'center', 
            marginTop: height/2 - height/6, 
            borderRadius: 5, 
            alignItems: 'center', 
            justifyContent: 'center'
          }}>
            <BodyText>Not connected to the internet</BodyText>
          </View>
        </View>
        )}
      </View>
    )
    return (
      <View></View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSignedIn: (user: User) => dispatch(signIn(user)),
    setMerchant: (merchant: Merchant) => dispatch(setMerchant(merchant))
  }
}

export default connect(null, mapDispatchToProps)(App)