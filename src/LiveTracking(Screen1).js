import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LiveTrackingCamera from './LiveTrackingCamera';


const {height,width} = Dimensions.get('window');


class LiveTracking extends Component{

	constructor(props){
		super(props);
		this.state ={
			live:true,
			loading: false
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

	setStateToTrue = () => {
		this.setState({
			loading: true
		})
	}

	setStateToFalse = () => {
		this.setState({
			loading: false
		})
	}

	render(){
		let mainImageBody = this.props.navigation.getParam('mainImageBody');
		let mainImageName = this.props.navigation.getParam('mainImageName');
		let mainImageTime = this.props.navigation.getParam('mainImageTime');
		return(

				<ScrollView>
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
					        <View style={{paddingVertical:40}}>
					        	<LiveTrackingCamera navigation={this.props.navigation} setStateToTrue={this.setStateToTrue} setStateToFalse={this.setStateToFalse} body={mainImageBody} name={mainImageName} time={mainImageTime} />
					        	<LiveTrackingCamera navigation={this.props.navigation} />
							</View>
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

export default LiveTracking;

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