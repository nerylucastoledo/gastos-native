import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InputSelect from './InputSelect'
import Cards from './Cards'

export default function MainContent() {
  return (
    <View style={styles.container}>
      <InputSelect />
      <Cards />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 16,
        marginStart: 16,
        marginTop: 24
    }
})