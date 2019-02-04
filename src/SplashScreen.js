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

	ComponentDidMount() {
		
	}

	unMountSplash() {
		setTimeout(() => {
			this.props.navigation.navigate('Home')
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