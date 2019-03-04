import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Alert, ScrollView, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CodeInput from 'react-native-confirmation-code-input';

const {height,width} = Dimensions.get('window');


class Search extends Component{

	constructor(props){
		super(props);
		this.state={
			date: '',
			loading: false,
			images: [],
			date: '',
			time1: '',
			time2: ''
		};

	}

	static navigationOptions = {
		header: null
	}

	fetchImages = () => {
		this.setState({
			loading: true
		})
		console.log(this.state.date.slice(0,4).concat('2019'+this.state.time1), this.state.date.slice(0,4).concat('2019'+this.state.time2));
		fetch('http://localhost:8000/timeSlicedImages', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			    'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				time1: this.state.date.slice(0,4).concat('2019'+this.state.time1),
				time2: this.state.date.slice(0,4).concat('2019'+this.state.time2),
			})
		})
		.then(res => res.json())
		.then(resJson => {
			let newResJson = resJson.map(res =>{
				return {'body': res.Body, 'name': res.name}
			});
			console.log(newResJson);
			let newResName = resJson.map(res => res.name);
			// console.log(newResJson);
			var newImages = [];
			let i=0;
			this.setState({
				images: newResJson
			}, () => {
				this.props.navigation.navigate('SearchDisplay', {
					images: this.state.images
				})
				this.setState({
					loading: false
				})
			})
			// Old method
			// newResJson.forEach(res => {
				// res.then(data => {
				// 	// console.log(data);
				// 	newImages = this.state.images;
				// 	newImages = [...newImages, data];
				// 	console.log("newImages", newImages);
				// 	this.setState({
				// 		images: newImages
				// 	}, () => {
				// 		i++;
				// 		if(i == newResJson.length) {
							// this.props.navigation.navigate('SearchDisplay', {
							// 	images: this.state.images
							// })
							// this.setState({
							// 	loading: false
							// })
				// 		}
				// 	});
				// })
			// })
		})
	}

	_onFulfill = async (code, type) => {
		if(type == 'date') {
			this.setState({
				date: code
			})
		}
		if(type == 'time1') {
			this.setState({
				time1: code
			})
		}
		if(type == 'time2') {
			this.setState({
				time2: code
			})
		}
	}

	render(){
		console.log(this.state.images);
		if(this.state.images)
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
							 <Text style={styles.bodyText}>Enter Date</Text>
							 <CodeInput
						      ref="codeInputRef1"
						      //secureTextEntry
						      codeLength={6}
						      className={'border-b'}
						      space={6}
						      size={50}
						      inputPosition='left'
						      activeColor='#05c49f'
	      					  inactiveColor='#05c49f'
	      					  onChangeText={(date) => this.setState({date})}
						      onFulfill={(code) => this._onFulfill(code, 'date')}
						    />
						     <Text style={styles.bodyText}>Time Range</Text>
							 <CodeInput
						      ref="codeInputRef1"
						      //secureTextEntry
						      codeLength={4}
						      className={'border-b'}
						      space={4}
						      size={50}
						      inputPosition='left'
						      activeColor='#05c49f'
	      					  inactiveColor='#05c49f'
	      					  onChangeText={(date) => this.setState({date})}
						      onFulfill={(code) => this._onFulfill(code, 'time1')}
						    />

						    <Text style={styles.bodyText}>To</Text>
							 <CodeInput
						      ref="codeInputRef1"
						      //secureTextEntry
						      codeLength={4}
						      className={'border-b'}
						      space={4}
						      size={50}
						      inputPosition='left'
						      activeColor='#05c49f'
	      					  inactiveColor='#05c49f'
	      					  onChangeText={(date) => this.setState({date})}
						      onFulfill={(code) => this._onFulfill(code, 'time2')}
						    />
						    <TouchableOpacity style={styles.searchButton} 
						    onPress={this.fetchImages}>
						    	<Text style={styles.buttonText}>Search</Text> 
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

export default Search;

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
		//flex:1,
		height:height*0.8,
		backgroundColor:'#030f1f',
		alignItems:'center',
		justifyContent:'center',
		paddingVertical:40,
	},

	bodyText:{
		textAlign:'center',
		fontSize:50,
		color:'#05c49f',
	},

	searchButton:{
		paddingVertical:2,
		paddingHorizontal:10,
		borderRadius: 30,
    	borderWidth: 4,
		borderColor:'#05c49f',
		backgroundColor:'#030E20',
	},

	buttonText:{
		textAlign:'center',
		color:'#05c49f', 
		fontSize:35,
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