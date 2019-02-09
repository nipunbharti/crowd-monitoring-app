import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';

const {height,width} = Dimensions.get('window');

class Faces extends Component{

	constructor(props){
		super(props);
	}

	navigateToPictures = () => {
		//console.log(this.props.navigation);
		this.props.navigation.navigate('Pictures')
	}

	render() {		
		return(
				<TouchableOpacity style={styles.mainContainer}
					onPress={this.navigateToPictures}
				>
				</TouchableOpacity>
			);
	}
}

export default Faces;

const styles = StyleSheet.create({

	mainContainer:{
		height:150,
		width:150,
		borderWidth:2,
		borderColor:'#05c49f',
		borderRadius:10,
		marginBottom:20,
	},

});