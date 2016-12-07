import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import PopupDialog, { ScaleAnimation, DialogTitle } from 'react-native-popup-dialog'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => {
          this.popupDialog.openDialog()
        }}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog }}
          dialogTitle={<DialogTitle title="Dialog Title" />}
          dialogAnimation = { new ScaleAnimation() }
        >
          <View>
            <TextInput style={{
              width: 200,
              paddingLeft: 30,
              height: 30
            }} />
          </View>
        </PopupDialog>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
