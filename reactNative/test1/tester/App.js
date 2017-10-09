import React, {Component} from 'react';
import Test from './components/Test';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class App extends React.Component {

  testFunct = () =>{
    return "asdf"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <Test></Test>
          <Button
            onPress={this.testFunct}
            title="the Button"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
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
