import React, { Component } from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';


const {height,width} = Dimensions.get('window');

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			zonedImages: []
		}
	}

	static navigationOptions = {
		header: null
	}

	navigateToLiveTracking = () => {
		this.setState({
			loading: true
		})
		fetch('http://localhost:8000/getLatestImage')
		.then(res => res.json())
		.then(resJson => {
			this.setState({loading: false})
			this.props.navigation.navigate('LiveTracking', {
				mainImageBody: resJson.Body,
				mainImageName: resJson.name,
				mainImageTime: resJson.LastModified
			})
		})
	}

	navigateToZoneAlert = () => {
		this.setState({
			loading: true
		})
		fetch('http://localhost:8000/getZonedData')
		.then(res => res.json())
		.then(resJson => {
			this.setState({
				loading: false
			})
			console.log(resJson);
			this.props.navigation.navigate('Zone', {
				zonedImages: resJson
			})
		})
	}
	
	render() {
		let count = this.props.navigation.getParam('count');
		return (
			<ScrollView style={styles.home}>
				<View style={styles.header}>
					<Text style={styles.headerText}>CroMdev</Text>
				</View>
				<View style={styles.mainContainer}>
					<TouchableOpacity style={styles.features}
						onPress={() => {
	    					this.props.navigation.navigate('Search')}}
						>
						<Image style={styles.icon1}
				          source={require('../Assets/search.png')}
				        />
				       
					</TouchableOpacity>
					<TouchableOpacity style={styles.features} 
						onPress={this.navigateToLiveTracking}>
	    				<Image style={styles.icon1}
				          source={require('../Assets/tracking.png')}
				        />
					</TouchableOpacity>
					<TouchableOpacity style={styles.features1} 
						onPress={this.navigateToZoneAlert}>
		    				<Image style={styles.icon1}
					          source={require('../Assets/zone.png')}
					        />
					   		<View style={{position: 'absolute',zIndex:1}}>
						        <View style={styles.alertNoti}>
			    					<Text style={{textAlign:'center',color:'white',fontSize:13}}>{count}</Text>
			    				</View>
		    				</View>
				       
					</TouchableOpacity>
				</View>
				{this.state.loading &&
				<View style={styles.loading}>
			      <ActivityIndicator size='large' />
			    </View>
			   	}
			</ScrollView>
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
		paddingBottom:20,
	},

	features:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		paddingVertical:20,
	},

	features1:{
		flex:1,
	},


	alertNoti:{
		height:26,
		width:26,
		backgroundColor:'red',
		borderRadius:13,
		justifyContent:'center',
		
	},

	icon1:{
		height:250,
		width:280,
	},

	iconText:{
		fontSize:50,
		color:'#05c49f',
	},

	loading: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}

});