import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import InputSelect from './InputSelect'
import Cards from './Cards'
import LastMovements from './LastMovements'

export default function MainContent() {
  return (
    <View style={styles.container}>
      <InputSelect />
      <Cards />
      <LastMovements />
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