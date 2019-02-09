import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {height,width} = Dimensions.get('window');

class SelectedPicture extends Component{

	constructor(props)
	{
		super(props);
	}

	render(){

		return(
				<TouchableOpacity style={styles.mainContainer}>

				</TouchableOpacity>
			);	
	}

}

export default SelectedPicture;

const styles = StyleSheet.create({

	mainContainer:{
		height:250,
		width:250,
		borderWidth:2,
		borderColor:'#05c49f',
		borderRadius:10,
		marginHorizontal:20,
		marginBottom:10,
	}

});