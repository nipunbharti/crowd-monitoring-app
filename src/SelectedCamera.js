import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectedCameraPicture from './SelectedCameraPicture(LiveTracking)';
import DetectedFacesLive from './DetectedFaces(LiveTracking)';

const {height,width} = Dimensions.get('window');

class SelectedCamera extends Component{

	constructor(props){
		super(props);
		this.state ={
			live:true
		};
	}

	static navigationOptions = {
		header: null
	}

	componentDidMount() {
		  setInterval( () => { 
		       this.setState({
		           live:!this.state.live
		       })
		    }, 1000);
		}

	render(){
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
							{this.state.live?<Image style={styles.icon1}
					          source={require('../Assets/live.png')}
					        />:<Image style={styles.icon1}
					          source={require('../Assets/live1.png')}
					        />
					    }
					        <View style={{paddingVertical:40,alignItems:'center'}}>
					        	<SelectedCameraPicture/>
					        	<ScrollView>
									<View style={styles.VerticalScroll}>
										<DetectedFacesLive/>
										<DetectedFacesLive/>
										<DetectedFacesLive/>
										<DetectedFacesLive/>
										<DetectedFacesLive/>
									</View>
								</ScrollView>
							</View>
					</View>
				</ScrollView>
			);
	}
}


export default SelectedCamera;

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
		flex:1,
		height:height*0.8,
		backgroundColor:'#030f1f',
		alignItems:'center',
		paddingVertical:20,
	},

	icon1:{
		height:40,
		width:120,
	},

	VerticalScroll:{
		padding:20,
		backgroundColor:'#030f1f',
		flexWrap:'wrap',
		flexDirection:'row',
		justifyContent:'space-between',
	},


});