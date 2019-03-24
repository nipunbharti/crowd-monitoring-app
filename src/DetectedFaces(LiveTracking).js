import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';

const {height,width} = Dimensions.get('window');

class DetectedFacesLive extends Component{

	constructor(props){
		super(props);

	}

	navigateToDetectedFace = () => {
		this.props.navigation.navigate('SelectedFaceLive')
	}

	render(){
		return(
				<TouchableOpacity style={styles.faces} onPress={this.navigateToDetectedFace}>
					<Text style={{fontSize: 20, color: 'white'}}>Hello</Text>
				</TouchableOpacity>
			);
	}
}

export default DetectedFacesLive;


const styles = StyleSheet.create({

	faces:{
		height:100,
		width:100,
		borderWidth:2,
		borderRadius:50,
		borderColor:'#05c49f',
		marginBottom:20,
		justifyContent: 'center',
		alignItems: 'center'
	}
});