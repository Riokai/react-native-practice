import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS
} from 'react-native';
import NetEase from './src/page/NetEase'

export default class demo extends Component {
  componentDidMount() {
    AlertIOS.prompt('info', 'react native', [
      {
        text: 'Cancel',
        onPress() {
          console.log('cancel');
        }
      },
      {
        text: 'OK',
        onPress(e) {
          console.log('sure', e);
        }
      }
    ])
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <NetEase /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#fff',
  }
});

AppRegistry.registerComponent('demo', () => demo);
