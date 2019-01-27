import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import SignInStack from '../screens/WelcomeScreen.js';
import SignUpStack from '../screens/NewUserScreen.js';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  SignIn: SignInStack,
  SignUp: SignUpStack,
  Main: MainTabNavigator
  

}));