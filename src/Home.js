import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert} from 'react-native';


const {height,width} = Dimensions.get('window');

class Home extends Component {

	static navigationOptions = {
		header: null
	}
	
	render() {
		return (
			<View style={styles.home}>
				<View style={styles.header}>
					<Text style={styles.headerText}>CroMdev</Text>
				</View>
				<TouchableOpacity style={styles.mainContainer}
					onPress={() => {
    					this.props.navigation.navigate('Search')}}
					>
					<Image style={styles.icon1}
			          source={require('../Assets/search.png')}
			        />
			        <Text style={styles.iconText}>Face Search</Text>
			       
				</TouchableOpacity>
			</View>
		);
	}
}

export default Home;

const styles = StyleSheet.create({
	home:{
		flex:1,
	},

	header:{
		height:height*0.2,
		backgroundColor:'#051934',
		alignItems:'center',
		justifyContent:'center',
	},

	headerText:{
		fontSize:50,
		//fontFamily: 'sans-serif',
		textAlign:'center',
		color:'#05c49f', 
	},

	mainContainer:{
		flex:1,
		backgroundColor:'#030f1f',
		alignItems:'center',
		justifyContent:'center',
	},

	icon1:{
		height:height*0.4,
		width:width*0.6,
	},

	iconText:{
		fontSize:50,
		color:'#05c49f',
	}

});