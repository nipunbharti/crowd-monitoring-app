import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './SplashScreen';
import Home from './Home';

const RootStack = createStackNavigator({
		Splash: SplashScreen,
		Home: Home
	},
	{
		initialRouteName: 'Splash'
	}
);

export default createAppContainer(RootStack);