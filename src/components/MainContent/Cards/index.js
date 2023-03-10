import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width - 64

export default function index() {
  return (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
    >
        <TouchableOpacity style={{ ...styles.card, width: windowWidth }}>
            <View style={styles.contentCard}>
                <Text style={styles.titleCard}>Nubank</Text>
                <Text style={styles.currentValue}>R$ 899,30</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.card, width: windowWidth }}>
            <View style={styles.contentCard}>
                <Text style={styles.titleCard}>Nubank</Text>
                <Text style={styles.currentValue}>R$ 899,30</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 130,
        marginBottom: 16,
    },

    card: {
        backgroundColor: '#612F74',
        borderRadius: 20,
        height: 110,
        marginRight: 16
    },

    contentCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleCard: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 16
    },

    currentValue: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})