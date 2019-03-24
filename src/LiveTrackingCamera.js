import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator} from 'react-native';


const {height,width} = Dimensions.get('window');


class LiveTrackingCamera extends Component{


	constructor(props){
		super(props);
	}

	navigateToLiveTracking = () => {
		this.props.setStateToTrue();
		fetch('http://localhost:8000/getFaceID', {
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  imageName: this.props.name,
			}),
		})
		.then(res => res.json())
		.then(resJson => {
			console.log(resJson);
			fetch('http://localhost:8000/getCroppedImage', {
				method: 'POST',
				headers: {
				  Accept: 'application/json',
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify({
				  imageName: this.props.name,
				  data: resJson
				}),
			})
			.then(res1 => res1.json())
			.then(resJson1 => {
				this.props.setStateToFalse();
				this.props.navigation.navigate('SelectedCamera', {
					mainImageBody: this.props.body,
					mainImageName: this.props.name,
					mainImageTime: this.props.time,
					croppedData: resJson1.croppedData
				})
			})
		})
	}


	render(){

		return(
				<TouchableOpacity style={styles.container}
				onPress ={this.navigateToLiveTracking}
				>
					<View style={{flex:1,justifycontent:'flex-end'}}>
						<Image style={{width: width*0.9, height: height*0.25}} source={{uri: `data:image/png;base64,${this.props.body}`}} />
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