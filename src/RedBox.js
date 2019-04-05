import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator} from 'react-native';


const {height,width} = Dimensions.get('window');


class RedBox extends Component{

	render(){

		return(
				<View style={styles.mainContainer} />
			);	
	}
}

export default RedBox;

const styles = StyleSheet.create({

	mainContainer:{
		height:83.5,
		width:118,
		borderWidth:2,
		borderColor:'red',
		position: 'absolute',
		zIndex: 1,
		left: 234
	}
})