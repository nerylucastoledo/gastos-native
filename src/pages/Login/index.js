import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState(false)
  const [errorAccount, setErrorAccount] = useState(false)

  function login() {
    //inserir aqui a logica do login
    navigation.navigate('home')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.logo} source={require('../../img/icon.png')} alt={'Icone do app'}/>
      </View>

      <View>
        <Text style={styles.textLogin}>Acessar conta</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#CFD3DC"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />


          {errorPassword && <Text style={styles.errorPassword}>senha incorreta</Text>}
          <TextInput
            style={{ ...styles.input, borderColor: errorPassword ? '#F31515' : 'transparent', borderWidth: 1 }}
            placeholder="Senha"
            placeholderTextColor="#CFD3DC"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          {errorAccount && <Text style={styles.textNotFoundAccount}>Nenhuma conta encontrada</Text>}

          <Text style={styles.textRestPassword}>Esqueci minha senha</Text>

          <TouchableOpacity 
            style={styles.btnSubmit}
            onPress={() => login()}
          >
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.contentCreateAccount}>
            <Text style={styles.textCreateAccount}>Ainda não tem uma conta?</Text>
            <Text style={styles.textLinkCreateAccount} onPress={() => navigation.navigate('createAccount')}>Crie uma</Text>
          </View>

        </View>
      </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center'
  },

  logo: {
    height: 158,
    width: 217,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24
  },

  textLogin: {
    color: '#060C1C',
    fontSize: 32,
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 16,
    textAlign: 'center'
  },  

  input: {
    height: 50,
    backgroundColor: '#fff',
    marginStart: 16,
    marginEnd: 16,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 24,
    shadowColor: "#8276F4",
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },

  errorPassword: {
    color: '#F31515',
    textAlign: 'right',
    marginEnd: 16,
    fontSize: 12,
    marginBottom: 2
  },

  btnSubmit: {
    backgroundColor: '#7367E5',
    marginEnd: 16,
    marginStart: 16,
    paddingVertical: 16,
    borderRadius: 8
  },

  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },

  textNotFoundAccount: {
    color: '#F31515',
    marginEnd: 16,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16
  },

  textRestPassword: {
    color: '#7D80A3',
    textAlign: 'right',
    fontSize: 16,
    marginEnd: 16,
    marginBottom: 24,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#7D80A3"
  },

  contentCreateAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 48
  },

  textCreateAccount: {
    color: '#7D80A3',
    fontWeight: 'bold'
  },

  textLinkCreateAccount: {
    color: '#7367E5',
    fontWeight: 'bold',
    marginLeft: 2
  }
})