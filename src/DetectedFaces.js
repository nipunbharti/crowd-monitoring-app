import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';

const {height,width} = Dimensions.get('window');

class DetectedFaces extends Component{

	constructor(props){
		super(props);
	}

	navigateToSelectedFace = () => {
		this.props.navigation.navigate('SelectedFace')
	}

	render(){
		return(
				<TouchableOpacity style={styles.faces}
				onPress={this.navigateToSelectedFace}
				>
				</TouchableOpacity>
			);
	}
}

export default DetectedFaces;


const styles = StyleSheet.create({

	faces:{
		height:100,
		width:100,
		borderWidth:2,
		borderRadius:50,
		borderColor:'#05c49f',
		marginBottom:20,
	}
});