import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from './src/Header';

export default function App() {
  const [id, setId] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const handlePress = () => {
    setIsChecked(!isChecked)
  }

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>

      <View style={styles.id}>
        <Text style={styles.idText}>E-MAIL OU ID DA EA</Text>

        <TextInput
          style={styles.input}
          onChangeText={setId}
          value={id}
          placeholder='Digite seu e-mail ou ID da EA'
          placeholderTextColor='#808080'
        />
      </View>

      <View style={styles.senha}>
        <Text style={styles.senhaText}>SENHA</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setSenha}
            value={senha}
            placeholder='Digite a senha'
            placeholderTextColor='#808080'
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Ionicons
              name={mostrarSenha ? 'eye' : 'eye-off'}
              size={24}
              color="#808080"
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.checkboxRow} activeOpacity={1}>
          <View style={[styles.checkbox, isChecked && styles.checked]}>
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.label}>Mantenha-me conectado</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerConnect}>
        <TouchableOpacity style={styles.connect}>
          <Text style={styles.connectText}>CONECTAR</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4B0082',
  },
  id: {
    marginTop: 60,
    marginLeft: 33,
  },
  idText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingBottom: 5,
    letterSpacing: 1,
  },
  input: {
    height: 40,
    width: '91%',
    borderColor: '#C0C0C0',
    borderWidth: 0.5,
    padding: 10,
    paddingRight: 40,
    color: '#808080',
    backgroundColor: '#000000',
    borderRadius: 7,
    letterSpacing: 1,
  },
  senha: {
    marginTop: 18,
    marginLeft: 33,
  },
  senhaText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingBottom: 5,
    letterSpacing: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eyeIcon: {
    position: 'absolute',
    right: 43,
    top: 8,
  },
  checkboxContainer: {
    padding: 10,
    marginTop: 3,
    marginLeft: 24,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 0.5,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 5
  },
  label: {
    color: '#FFFFFF',
    letterSpacing: 1
  },
  checkmark: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  containerConnect: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 50,
    marginLeft: 33,
    marginRight: 33,
    marginTop: 15,
    borderRadius: 8
  },
  connectText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }

});
