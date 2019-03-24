import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {height,width} = Dimensions.get('window');

class Person extends Component{
	constructor(props){
		super(props);
	}

	render(){
		//console.log(this.props.face, this.props.name)
		return(
				<View>
					<TouchableOpacity 
					onPress={this.navigateToSelectedFace}
					style={styles.mainContainer}>
						<Image style={{width: 100, height: 100}} source={{uri: `data:image/png;base64,${this.props.body}`}} />
						<Text>{(new Date(this.props.time)).toString()}</Text>
					</TouchableOpacity>
				</View>
			);
	}
}

export default Person;

const styles = StyleSheet.create({

	mainContainer:{
		height:100,
		width:100,
		borderWidth:2,
		borderColor:'#05c49f',
		borderRadius:10,
		marginBottom:20,
	},

});