import React from 'react'

import { Platform, SafeAreaView, StyleSheet } from 'react-native'
import Routes from './routes'

export default function App() {
  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Routes />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1
  }
})
