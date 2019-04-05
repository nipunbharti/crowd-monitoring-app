import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator} from 'react-native';
import RedBox from './RedBox';

const {height,width} = Dimensions.get('window');


class ZoneTrackingCamera extends Component{


	constructor(props){
		super(props);
	}



	render(){

		return(
				<TouchableOpacity style={styles.container}>
					<View style={{flex:1,justifycontent:'flex-end'}}>
						<RedBox />
						<Image style={{width: 350, height:200, borderRadius:20}} source={{uri: `data:image/png;base64,${this.props.body}`}} />
					</View>
				</TouchableOpacity>
			);
	}
}

export default ZoneTrackingCamera;

const styles = StyleSheet.create({

	container:{
		height:202,
		width:352,
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