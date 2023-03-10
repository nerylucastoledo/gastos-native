import { View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';

const InputSelect = () => {
    const [selectMonth, setSelectMonth] = useState('');
    const [selectYear, setSelectYear] = useState();

    return (
      <View style={styles.container}>
        <Picker
            style={styles.input}
            dropdownIconColor={'#fff'}
            selectedValue={selectMonth}
            onValueChange={(itemValue, itemIndex) =>
                setSelectMonth(itemValue)
            }>
            <Picker.Item color='fff' label="Janeiro" value="janeiro" />
            <Picker.Item color='fff' label="Fevereiro" value="fevereiro" />
            <Picker.Item color='fff' label="Março" value="marco" />
            <Picker.Item color='fff' label="Abril" value="abril" />
            <Picker.Item color='fff' label="Maio" value="maio" />
            <Picker.Item color='fff' label="Junho" value="junho" />
            <Picker.Item color='fff' label="Julho" value="julho" />
            <Picker.Item color='fff' label="Setembro" value="setembro" />
            <Picker.Item color='fff' label="Outubro" value="outubro" />
            <Picker.Item color='fff' label="Novembro" value="novembro" />
            <Picker.Item color='fff' label="Dezembro" value="dezembro" />
        </Picker>

        <Picker
            style={styles.input}
            selectedValue={selectYear}
            dropdownIconColor={'#fff'}
            onValueChange={(itemValue, itemIndex) =>
                setSelectYear(itemValue)
            }>
            <Picker.Item color='fff' label="2020" value="2020" />
            <Picker.Item color='fff' label="2021" value="2021" />
            <Picker.Item color='fff' label="2022" value="2022" />
            <Picker.Item color='fff' label="2023" value="2023" />
            <Picker.Item color='fff' label="2024" value="2024" />
            <Picker.Item color='fff' label="2025" value="2025" />
            <Picker.Item color='fff' label="2026" value="2026" />
            <Picker.Item color='fff' label="2027" value="2027" />
            <Picker.Item color='fff' label="2028" value="2028" />
        </Picker>
      </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -6,
        gap: 16
    },

    input: {
        height: 50,
        backgroundColor: '#9283F6',
        fontSize: 18,
        marginBottom: 16,
        shadowColor: "#8276F4",
        shadowOpacity: 0.08,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        width: 181.5,
        color: '#fff',
    }
})

export default InputSelect