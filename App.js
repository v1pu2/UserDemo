/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import Users from './src/containers/Users'
import DefaultUser from './src/containers/DefaultUser'
import RegisterScreen from './src/containers/RegisterScreen'
import { createAppContainer, } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'


console.disableYellowBox = true;

const emptyHeader = {
  header: null
}

const TabNavigator = createBottomTabNavigator({

  Users: { screen: Users, navigationOptions: emptyHeader },
  DefaultUser: { screen: DefaultUser, navigationOptions: emptyHeader },

},

  {
    tabBarOptions: {
      activeTintColor: '#FF9800',
      inactiveTintColor: '#000000',

      showIcon: false,
      showLabel: true,
      style: {
        backgroundColor: '#FFFFFF',
            },
      labelStyle: {
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom:10
      },


    },
  }
)
const RootStack = createStackNavigator(
  {

    TabNavigator: { screen: TabNavigator, navigationOptions: emptyHeader },
    RegisterScreen: { screen: RegisterScreen, navigationOptions: emptyHeader },
  },
  {
    initialRouteName: 'TabNavigator',
  },
);


const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}