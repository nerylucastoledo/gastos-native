import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CurrentValues() {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.boxMoney}>
                <View style={styles.boxMoneyOne}>
                    <Text style={styles.title}>Sua parte</Text>
                    <Text style={styles.value}>R$ 2.127,28</Text>
                </View>
                <View>
                    <Text style={styles.title}>Salário</Text>
                    <Text style={styles.value}>R$ 3.757,07</Text>
                </View>
            </View>

            <View style={styles.spending}>
                <View style={styles.boxSpendingOne}>
                    <Text style={styles.titleSpending}>Restante</Text>
                    <Text style={styles.valueSpending}>R$ 832,04</Text>
                </View>
                <View style={styles.boxSpendingTwo}>
                    <Text style={styles.titleSpending}>Gastar semana</Text>
                    <Text style={styles.valueSpending}>R$ 287,30</Text>
                </View>
                <View>
                    <Text style={styles.titleSpending}>Guardar</Text>
                    <Text style={styles.valueSpending}>R$ 1.130,40</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8276F4',
        width: '100%',
        borderRadius: 20,
        marginTop: -20
    },

    content: {
        padding: 16
    },

    boxMoney: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    boxMoneyOne: {
        borderEndWidth: 1,
        borderColor: '#F0EEEE',
        marginRight: 30,
        paddingRight: 30
    },  

    spending: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    boxSpendingOne: {
        borderEndWidth: 1,
        borderColor: '#F0EEEE',
        marginRight: 15,
        paddingRight: 15
    },

    boxSpendingTwo: {
        borderEndWidth: 1,
        borderColor: '#F0EEEE',
        marginRight: 15,
        paddingRight: 15
    },

    title: {
        color: '#F0EEEE',
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 24
    },

    value: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 24,
        fontWeight: 'bold'
    },

    titleSpending: {
        color: '#F0EEEE',
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 20
    },

    valueSpending: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
        fontSize: 16,
        fontWeight: 'bold'
    }
})