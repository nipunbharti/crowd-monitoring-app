import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RootStack from './RootStack';

export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
