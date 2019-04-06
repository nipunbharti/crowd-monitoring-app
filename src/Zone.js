import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator, Button} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ZoneTrackingCamera from './ZoneTrackingCamera';

const {height,width} = Dimensions.get('window');

class Zone extends Component{

	constructor(props){
		super(props);
		this.state = {
			loading: false
		};
	}


	static navigationOptions = {
		header: null
	}

	clearAll = () => {
		this.setState({
			loading: true
		});
		fetch('https://cromdev-backend.herokuapp.com/setTrueZone')
		.then(res => res.json())
		.then(resJson => {
			this.setState({
				loading: false
			});
			this.props.navigation.navigate('Home', {
				count: 0
			})
		})
		.catch(err => Alert.alert(err))
	}

	render(){
		let zonedImages = this.props.navigation.getParam('zonedImages');
		let zoneTrackingCamera = zonedImages.map((val, index) => <ZoneTrackingCamera body={val.Body} key={index} />)
		return(
			<ScrollView style={styles.mainContainer}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => {
					this.props.navigation.goBack()}}>
						<FontAwesome name="angle-left" size={50} color={'#05c49f'}/>
					</TouchableOpacity>
					<Text style={styles.headerText}>CroMdev</Text>
				</View>
				<View>
					<Button onPress={this.clearAll} title="Clear" />
				</View>
				<View style={styles.body}>
					{zoneTrackingCamera}
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

export default Zone;

const styles = StyleSheet.create({

	mainContainer:{
		flex:1,
		backgroundColor:'#030f1f',
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
		padding:20,
		backgroundColor:'#030f1f',
		alignItems:'center',
	}

	})