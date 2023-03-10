import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image  style={styles.logo} source={require('../../img/icon.png')} alt={'Icone do app'}/>
      <Text style={styles.name}>Olá, Lucas</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#9283F6',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 20,
    paddingBottom: 40,
    paddingRight: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  logo: {
    width: 80,
    height: 80
  },

  name: {
    color: '#fff',
    fontSize: 24
  },
})
