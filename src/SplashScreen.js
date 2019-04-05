import React, { Component } from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

class SplashScreen extends Component {

	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		header: null
	}

	unMountSplash() {
		setTimeout(() => {
			fetch('http://localhost:8000/getZonedCount')
			.then(res => res.json())
			.then(resJson => {
				console.log(resJson)
				this.props.navigation.navigate('Home', {
					count: resJson.count
				})
			})
		}, 2000);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image style={{width: width, height: height}}
					source={require('../Assets/Splash.png')}
					onLoad={() => this.unMountSplash()} />
			</View>
		);
	}
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#888888',
  },
});