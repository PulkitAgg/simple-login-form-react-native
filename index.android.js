import LoginPage from './components/LoginPage.js'
import SuccessPage from './components/SuccessPage.js'
import FailurePage from './components/FailurePage.js'
import React from 'react';
import { StackNavigator } from 'react-navigation';
import {AppRegistry} from 'react-native';

const LoginForm = StackNavigator({
  Home: { screen: LoginPage },
  Success: { screen: SuccessPage },
  Failure: { screen: FailurePage}
});

AppRegistry.registerComponent('LoginForm', () => LoginForm);
