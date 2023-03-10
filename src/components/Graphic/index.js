import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Graphic() {
  return (
    <View style={styles.container}>
      <Text>Graphic</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 140,
        backgroundColor: '#fff',
        marginEnd: 16,
        marginStart: 16,
        marginTop: 24,
        borderRadius: 8
    }
})