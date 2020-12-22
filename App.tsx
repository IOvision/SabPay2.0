//React
import React from 'react';
import Colors from './src/assets/colors'
import {
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

Amplify.configure(awsConfig)
Auth.configure({
  storage: AmplifyStorage
})

export interface Props {
  setSignedIn: (user: User) => void,
  setMerchant: (merchant: Merchant) => void
}
export interface State {
  isLoading: boolean
}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  getUserData = () => new Promise((resolve, reject) => {
    Auth.currentAuthenticatedUser()
    .then(data => {
      var a = new User(data.attributes.phone_number)
      this.props.setSignedIn(a)
      resolve(true)
    })
    .catch(err => {
      resolve(true)
    })
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
  }

  render () {
    if(!this.state.isLoading)
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <Root />
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