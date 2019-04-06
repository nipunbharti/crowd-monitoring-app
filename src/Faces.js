import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';

const {height,width} = Dimensions.get('window');

class Faces extends Component{

	constructor(props){
		super(props);
	}

	navigateToPictures = (e, name) => {
		fetch('https://cromdev-backend.herokuapp.com/getFaceID', {
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  imageName: name,
			}),
		})
		.then(res => res.json())
		.then(resJson => {
			let newResJson = [];
			resJson.forEach(value => {
				newResJson.push({faceId: value.FaceId, faceBody: value.body})
			})
			// let newResJson = resJson.map(res => {faceId: res.FaceId, faceBody: res.body});
			this.props.navigation.navigate('Pictures', {
				name: name,
				faceIds: newResJson,
				image: this.props.image
			})
		})
		.catch(err => console.log(err))
	}

	render() {
		return(
				<TouchableOpacity style={styles.mainContainer}
					onPress={(e) => this.navigateToPictures(e, this.props.name)}
				>
					<Image style={{width: 150, height: 150,borderRadius:10}} source={{uri: `data:image/png;base64,${this.props.image}`}} />
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