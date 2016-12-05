import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
} from 'react-native'

export default class NetEase extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={[styles.font, styles.font_1]}>网易</Text>
        <View
          style={{
            marginHorizontal: 4
          }}
        >
          <Text style={[styles.font, styles.font_2]}>新闻</Text>
        </View>
        <Text style={styles.font}>有态度</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    borderBottomWidth: 3 / PixelRatio.get(),
    borderBottomColor: '#ef2d36',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  font: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center'
  },
  font_1: {
    color: '#cd1d1c',
  },
  font_2: {
    color: '#fff',
    backgroundColor: '#cd1d1c',
  }
})
