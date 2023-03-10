import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import CurrentValues from '../../components/ CurrentValues'
import Graphic from '../../components/Graphic'
import MainContent from '../../components/MainContent'

export default function Home() {
  return (
    <View>
        <Header />
        <CurrentValues />
        <Graphic />
        <MainContent />
    </View>
  )
}