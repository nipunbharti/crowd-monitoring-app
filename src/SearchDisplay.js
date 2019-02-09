import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Faces from './Faces';

const {height,width} = Dimensions.get('window');



class SearchDisplay extends Component{

	constructor(props){
		super(props);
	}

	static navigationOptions = {
		header: null
	}

	render(){
		let renderFaces = new Array(20).fill(0).map(face => {
			return <Faces navigation={this.props.navigation} />
		})
		return(
			<View style={styles.mainContainer}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => {
					this.props.navigation.goBack()}}>
						<FontAwesome name="angle-left" size={50} color={'#05c49f'}/>
					</TouchableOpacity>
					<Text style={styles.headerText}>CroMdev</Text>
				</View>
				<ScrollView style={styles.scroll}>
					<View style={styles.body}>
						{renderFaces}
					</View>	
				</ScrollView>
			</View>
			);
	}
}

export default SearchDisplay;


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

	scroll:{
		backgroundColor:'#030f1f',
	},

	body:{
		paddingTop:50,
		paddingHorizontal:20,
		paddingBottom:20,
		backgroundColor:'#030f1f',
		flexWrap:'wrap',
		flexDirection:'row',
		justifyContent:'space-between',
	},

	text:{
		color:'white',
		fontSize:100,	
	}

});