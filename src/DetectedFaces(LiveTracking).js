import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';

const {height,width} = Dimensions.get('window');

class DetectedFacesLive extends Component{

	constructor(props){
		super(props);

	}

	navigateToDetectedFace = () => {
		this.props.setStateToTrue();
		fetch('https://cromdev-backend.herokuapp.com/getImages', {
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				faceID: this.props.faceId,
				externalID: this.props.mainImageName
			}),
		})
		.then(res => res.json())
		.then(resJson => {
			this.props.setStateToFalse();
			this.props.navigation.navigate('SelectedFaceLive', {
				data: resJson,
				selectedFace: this.props.body
			})
		})
	}

	render(){
		return(
				<TouchableOpacity style={styles.faces} onPress={this.navigateToDetectedFace}>
					<Image style={{width: 100, height: 100, borderRadius:50}} source={{uri: `data:image/png;base64,${this.props.body}`}} />
				</TouchableOpacity>
			);
	}
}

export default DetectedFacesLive;


const styles = StyleSheet.create({

	faces:{
		height:120,
		width:120,
		borderWidth:2,
		borderRadius:50,
		borderColor:'#05c49f',
		marginBottom:20,
		marginHorizontal:20,
		justifyContent: 'center',
		alignItems: 'center'
	}
});