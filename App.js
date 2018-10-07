import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Potato extends React.Component {
  render() {
    return (
      <Text> {this.props.kind} kind of potato!</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Potato kind="woah"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
