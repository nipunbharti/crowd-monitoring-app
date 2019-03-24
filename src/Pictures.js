import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectedPicture from './SelectedPicture';
import DetectedFaces from './DetectedFaces';

const {height,width} = Dimensions.get('window');

class Pictures extends Component{

	constructor(props){
		super(props);
	}

	static navigationOptions = {
		header: null
	}



	render(){
		let faceIds = this.props.navigation.getParam('faceIds');
		let name = this.props.navigation.getParam('name');
		let image = this.props.navigation.getParam('image');
		console.log(faceIds, name, image);
		let renderFaces = faceIds.map((face, index) => {
			return <DetectedFaces navigation={this.props.navigation} name={name} faceId={face.faceId} faceBody={face.faceBody} index={index+1} />
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
					<View style={styles.body}> 
						<ScrollView horizontal={true} style={styles.horizontalScroll}>
							<SelectedPicture image={image} />
						</ScrollView>
						<Text style={styles.descriptionText}>"Camera Name"</Text>
						<ScrollView>
							<View style={styles.VerticalScroll}>
								{renderFaces}
							</View>
						</ScrollView>
					</View>
				</View>
			);
	}
}

export default Pictures;

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

	body:{
		backgroundColor:'#030f1f',
	},

	horizontalScroll:{
		paddingVertical:20,
	},

	descriptionText:{
		textAlign:'center',
		fontSize:25,
		color:'#05c49f',
		paddingVertical:10,
	},

	VerticalScroll:{
		padding:20,
		backgroundColor:'#030f1f',
		flexWrap:'wrap',
		flexDirection:'row',
		justifyContent:'space-between',
	},

});