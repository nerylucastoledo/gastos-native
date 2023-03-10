import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const DATA = [
    {
      card: 'Nubank',
      item: 'Presente de aniversário',
      people: 'Lucas',
      value: 350,
      parcelamento: 3
    },
    {
      card: 'Nubank',
      item: 'Presente de aniversárioo',
      people: 'Lucas',
      value: 350,
      parcelamento: 3
    },
    {
      card: 'Picpay',
      item: 'Vivo',
      people: 'Alessa',
      value: 32.50,
    },
    {
      card: 'Meus Gastos',
      item: 'Carro',
      people: 'Lucas',
      value: 300,
    },
    {
      card: 'Samsung',
      item: 'Huragano',
      people: 'Alessa',
      value: 175,
    },
  ]

const Item = ({ card, item, people, value, parcelamento }) => (
    <View style={styles.item}>
        <View style={styles.contentInformation}>
            <AntDesign name="creditcard" size={32} color="black" />
            <View>
                <Text style={styles.itemboxTwo}>Cartão: {card}</Text>
                <Text style={styles.itemboxTwo}>Item: {item}</Text>
                <Text style={styles.itemboxTwo}>Pessoa: {people}</Text>
            </View>
        </View>
        <View style={styles.contenValues}>
            <Text style={styles.itemboxThreeValue}>R$ {value}</Text>
            <Text style={styles.itemboxThreeParcelamento}>Em {parcelamento}x</Text>
        </View>
    </View>
  );

export default function LastMovements() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Últimos cadastros</Text>

        <View>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item card={item.card} item={item.item} parcelamento={item.parcelamento} people={item.people} value={item.value} />}
                keyExtractor={item => `${item.card}-${item.people}-${item.item}`}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 16
    },

    container: {
        height: 150
    },

    item: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    },

    contentInformation: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },

    itemboxThreeValue: {
        fontWeight: 'bold'
    },

    contenValues: {
        alignItems: 'center'
    },
})