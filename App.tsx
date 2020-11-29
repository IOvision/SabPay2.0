//React
import React from 'react';
import Colors from './src/assets/colors'
import {
  View,
} from 'react-native';
import Root from './src/navigation/Root'
import SplashScreen from 'react-native-splash-screen'

//Amplify
import Amplify from 'aws-amplify'
import awsConfig from './aws-exports'

Amplify.configure(awsConfig)

export interface Props { }
export interface State { }

class App extends React.Component<Props, State> {
  componentDidMount() {
    SplashScreen.hide()
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: Colors.background}}>
        <Root />
      </View>
    )
  }
}

export default App