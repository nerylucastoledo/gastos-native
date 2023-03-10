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
            dropdownIconColor={'#060C1C'}
            selectedValue={selectMonth}
            onValueChange={(itemValue, itemIndex) =>
                setSelectMonth(itemValue)
            }>
            <Picker.Item color='060C1C' label="Janeiro" value="janeiro" />
            <Picker.Item color='060C1C' label="Fevereiro" value="fevereiro" />
            <Picker.Item color='060C1C' label="Março" value="marco" />
            <Picker.Item color='060C1C' label="Abril" value="abril" />
            <Picker.Item color='060C1C' label="Maio" value="maio" />
            <Picker.Item color='060C1C' label="Junho" value="junho" />
            <Picker.Item color='060C1C' label="Julho" value="julho" />
            <Picker.Item color='060C1C' label="Setembro" value="setembro" />
            <Picker.Item color='060C1C' label="Outubro" value="outubro" />
            <Picker.Item color='060C1C' label="Novembro" value="novembro" />
            <Picker.Item color='060C1C' label="Dezembro" value="dezembro" />
        </Picker>

        <Picker
            style={styles.input}
            selectedValue={selectYear}
            dropdownIconColor={'#060C1C'}
            onValueChange={(itemValue, itemIndex) =>
                setSelectYear(itemValue)
            }>
            <Picker.Item color='060C1C' label="2020" value="2020" />
            <Picker.Item color='060C1C' label="2021" value="2021" />
            <Picker.Item color='060C1C' label="2022" value="2022" />
            <Picker.Item color='060C1C' label="2023" value="2023" />
            <Picker.Item color='060C1C' label="2024" value="2024" />
            <Picker.Item color='060C1C' label="2025" value="2025" />
            <Picker.Item color='060C1C' label="2026" value="2026" />
            <Picker.Item color='060C1C' label="2027" value="2027" />
            <Picker.Item color='060C1C' label="2028" value="2028" />
        </Picker>
      </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16
    },

    input: {
        height: 50,
        backgroundColor: '#E5E0FF',
        fontSize: 18,
        marginBottom: 24,
        shadowColor: "#8276F4",
        shadowOpacity: 0.08,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        width: '47.5%',
        color: '#060C1C',
    }
})

export default InputSelect