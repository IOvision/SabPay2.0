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

Amplify.configure(awsConfig)
Auth.configure({
  storage: AmplifyStorage
})

export interface Props {
  setSignedIn: () => void
}
export interface State { }

class App extends React.Component<Props, State> {

  componentDidMount() {
    Auth.currentSession()
    .then(data => {
      this.props.setSignedIn()
      SplashScreen.hide()
    })
    .catch(err => {
      SplashScreen.hide()
    })
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <Root />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSignedIn: () => dispatch(signIn())
  }
}

export default connect(null, mapDispatchToProps)(App)