import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {height,width} = Dimensions.get('window');

class Zone extends Component{

	constructor(props){
		super(props);
	}


	static navigationOptions = {
		header: null
	}

	render(){

		return(
			<View style={styles.mainContainer}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => {
					this.props.navigation.goBack()}}>
						<FontAwesome name="angle-left" size={50} color={'#05c49f'}/>
					</TouchableOpacity>
					<Text style={styles.headerText}>CroMdev</Text>
				</View>
			</View>
			);
	}
}

export default Zone;

const styles = StyleSheet.create({

	mainContainer:{
		flex:1,
	},

	header:{
		paddingHorizontal:20,
		height:height*0.2,
		backgroundColor:'#051934',
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row',
		justifyContent:'space-between',
	},

	headerText:{
		fontSize:50,
		//fontFamily: 'sans-serif',
		textAlign:'center',
		color:'#05c49f', 
		paddingRight:50,	
	},

	})