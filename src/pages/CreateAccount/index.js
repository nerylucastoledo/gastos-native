import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

export default function CreateAccount({ navigation }) {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [salary, setSalary] = useState('')
  const [investiment, setInvestment] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorInput, setErrorInput] = useState(false)

  function createAccount() {
    //inserir a logica aqui
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <View style={styles.content}>
          <Image style={styles.logo} source={require('../../img/icon.png')} alt={'Icone do app'}/>
        </View>

        <View>
          <Text style={styles.titleCreateAccount}>Criar conta</Text>

          <View style={styles.boxName}>
            <TextInput
              style={{ ...styles.input, width: '46%', marginEnd: 16 }}
              placeholder="Nome"
              placeholderTextColor="#CFD3DC"
              onChangeText={(text) => setName(text)}
              value={name}
            />

            <TextInput
              style={{ ...styles.input, width: '46%', marginStart: 0 }}
              placeholder="Username"
              placeholderTextColor="#CFD3DC"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Salário"
              placeholderTextColor="#CFD3DC"
              onChangeText={(text) => setSalary(text)}
              keyboardType={'numeric'}
              value={salary}
            />

            <TextInput
              style={styles.input}
              placeholder="Quantos % por mês?"
              placeholderTextColor="#CFD3DC"
              onChangeText={(text) => setInvestment(text)}
              keyboardType={'numeric'}
              value={investiment}
            />

            {errorInput === 0 && <Text style={styles.errorInput}>e-mail já utilizado</Text>}
            <TextInput
              style={{ ...styles.input, borderColor: errorInput === 0 ? '#F31515' : 'transparent', borderWidth: 1 }}
              placeholder="E-mail"
              placeholderTextColor="#CFD3DC"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />

            {errorInput === 1 && <Text style={styles.errorInput}>senha deve ter 8 digítos</Text>}
            <TextInput
              style={{ ...styles.input, borderColor: errorInput === 1 ? '#F31515' : 'transparent', borderWidth: 1 }}
              placeholder="Senha"
              placeholderTextColor="#CFD3DC"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />

            {errorInput === 2 && <Text style={styles.errorInput}>senha diferente</Text>}
            <TextInput
              style={{ ...styles.input, borderColor: errorInput === 2 ? '#F31515' : 'transparent', borderWidth: 1 }}
              placeholder="Confirme a senha"
              placeholderTextColor="#CFD3DC"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
            />

            <TouchableOpacity 
              style={styles.btnSubmit}
              onPress={() => createAccount()}
            >
              <Text style={styles.btnText}>Criar</Text>
            </TouchableOpacity>

            <View style={styles.contentCreateAccount}>
              <Text style={styles.textCreateAccount}>Já possui conta?</Text>
              <Text style={styles.textLinkCreateAccount} onPress={() => navigation.navigate('login')}>Acessar</Text>
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

  boxName: {
    flexDirection: 'row',
    width: '96%'
  },

  titleCreateAccount: {
    color: '#060C1C',
    fontSize: 32,
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 16,
    textAlign: 'center',
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

  errorInput: {
    color: '#F31515',
    textAlign: 'right',
    marginEnd: 16,
    fontSize: 12,
    marginBottom: 2
  },

  contentCreateAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 24
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