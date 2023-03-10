import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import {
  LineChart,
} from "react-native-chart-kit";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [1978.50, 1328.30, 1786.56, 2456.78, 1999.99, 2234.34],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Gastos por meses"] // optional
};

const screenWidth = Dimensions.get("window").width - 32

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0.6,
  color: (opacity = 1) => `rgba(6, 12, 28, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default function Graphic() {
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth}
        height={110}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#fff',
    marginEnd: 16,
    marginStart: 16,
    marginTop: 16,
    borderRadius: 8
  }
})