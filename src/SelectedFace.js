import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Person from './Person';

const {height,width} = Dimensions.get('window');

class SelectedFace extends Component{

	constructor(props){
		super(props);
	}

	static navigationOptions = {
		header: null
	}

	render(){
		let images = this.props.navigation.getParam('images');
		let faceBody = this.props.navigation.getParam('faceBody');
		let renderFaces = images.map(face => {
			return <Person navigation={this.props.navigation} face={face.body} name={face.name} />
		})
		return(
				<ScrollView style={styles.mainContainer}>
					<View style={styles.header}>
						<TouchableOpacity onPress={() => {
						this.props.navigation.goBack()}}>
							<FontAwesome name="angle-left" size={50} color={'#05c49f'}/>
						</TouchableOpacity>
						<Text style={styles.headerText}>CroMdev</Text>
					</View>
					<View style={styles.body}>
						<View style={styles.SelectedFace}>
							<Image style={{width: 150, height: 150,borderRadius:10}} source={{uri: `data:image/png;base64,${faceBody}`}} />
						</View>
						<ScrollView>
							<View style={styles.scroll}>
								{renderFaces}
							</View>
						</ScrollView>
					</View>
				</ScrollView>
			);
	}
}

export default SelectedFace;

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
		alignItems:'center',
		paddingVertical:20,
	},

	SelectedFace:{
		height:150,
		width:150,
		borderWidth:2,
		borderColor:'#05c49f',
		borderRadius:10,
	},

	scroll:{
		padding:20,
		flexWrap:'wrap',
		flexDirection:'row',
		justifyContent:'space-between',
	}

});