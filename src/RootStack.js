import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SplashScreen from './SplashScreen';
import Home from './Home';
import Search from './Search';
import SearchDisplay from './SearchDisplay';
import Pictures from './Pictures';
import Faces from './Faces';
import DetectedFaces from './DetectedFaces';
import SelectedFace from './SelectedFace';
import LiveTracking from './LiveTracking(Screen1)';
import SelectedCamera from './SelectedCamera';
import SelectedFaceLive from './SelectedFace(LiveTracking)';


const RootStack = createStackNavigator({
		Splash: SplashScreen,
		Home: Home,
		Search:Search,
		SearchDisplay:SearchDisplay,
		Pictures: Pictures,
		SelectedFace: SelectedFace,
		LiveTracking: LiveTracking,
		SelectedCamera:SelectedCamera,
		SelectedFaceLive:SelectedFaceLive,
	},
	{
		initialRouteName: 'Splash'
	}
);

export default createAppContainer(RootStack);