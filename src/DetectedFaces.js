import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';

const {height,width} = Dimensions.get('window');

class DetectedFaces extends Component{

	constructor(props){
		super(props);

	}

	navigateToSelectedFace = () => {
		console.log(this.props.faceId, this.props.name);
		fetch('http://localhost:8000/getImages', {
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  faceID: this.props.faceId,
			  externalID: this.props.name
			})
		})
		.then(res => res.json())
		.then(resJson => {
			let newResJson = resJson.map(res => {
				return {'body': res.Body, 'name': res.name}
			})
			console.log(newResJson);
			this.props.navigation.navigate('SelectedFace', {
				faceBody: this.props.faceBody,
				images: newResJson
			})
		})
		.catch(err => console.log(err));
	}

	render(){
		return(
				<TouchableOpacity style={styles.faces}
				onPress={this.navigateToSelectedFace}
				>
					<Image style={{width: 100, height: 100,borderRadius:50}} source={{uri: `data:image/png;base64,${this.props.faceBody}`}} />
				</TouchableOpacity>
			);
	}
}

export default DetectedFaces;


const styles = StyleSheet.create({

	faces:{
		height:120,
		width:120,
		borderWidth:2,
		borderRadius:50,
		borderColor:'#05c49f',
		marginBottom:20,
		justifyContent: 'center',
		alignItems: 'center'
	}
});