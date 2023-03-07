import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

import CreateAccount from './src/pages/CreateAccount';
import Login from './src/pages/Login';
import Home from './src/pages/Home';

const Stack = createStackNavigator()
const statusBarHeight = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight + 10

export default function App() {
  return (
    <SafeAreaView style={{marginTop: statusBarHeight, ...styles.container}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="createAccount" component={CreateAccount} options={{ headerShown: false }}/>
          <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA'
  },
});