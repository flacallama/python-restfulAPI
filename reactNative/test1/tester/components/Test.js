import React, {Component} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class Test extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Testing works</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
