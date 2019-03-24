import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator} from 'react-native';


const {height,width} = Dimensions.get('window');


class LiveTrackingCamera extends Component{


	constructor(props){
		super(props);
	}

	navigateToLiveTracking = () => {
		this.props.navigation.navigate('SelectedCamera')
	}


	render(){

		return(
				<TouchableOpacity style={styles.container}
				onPress ={this.navigateToLiveTracking}
				>
					<View style={{flex:1,justifycontent:'flex-end'}}>
						<Text style={styles.text}>xxx</Text>
					</View>
				</TouchableOpacity>
			);
	}
}

export default LiveTrackingCamera;

const styles = StyleSheet.create({

	container:{
		height:height*0.25,
		width:width*0.9,
		borderWidth:2,
		borderColor:'#05c49f',
		borderRadius:20,
		marginBottom:20,
	},

	text:{
		color:'white',
		fontSize:20,
		textAlign:'center',
	}

})