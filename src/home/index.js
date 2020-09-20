import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';


const Home = ({dataScan = null} ={}) => {
  
  
  const [placa, setPlaca] = useState("");
  const month = {
    "Enero": 1,
    "Febrero": 2,
    "Marzo": 3,
    "Abril": 4,
    "Mayo": 5,
    "Junio": 6,
    "Julio": 7,
    "Agosto": 8,
    "Septiembre": 9,
    "Octubre": 10,
    "Noviembre": 11,
    "Diciembre": 12,
  }

  const onPress = () => {
    const d = new Date();
    const ob = Object.values(month); //Recorro el objeto mes
    const mes = ob[d.getMonth()]; //Obteniendo el numero del mes
    //const ultimoDigito = placa.length.slice(6,7);

    const entrada = dataScan ? dataScan : placa;

    if (entrada.length === 7) {
      const ultimoDigito = entrada.slice(6, 7)
      if (ultimoDigito % 2 == 1 && mes % 2 == 1) { // Digito impar y Mes impar
        Alert.alert("Resultado", "Puedes circular los días : Lunes, Miercoles, Viernes, Domingo")
      } else if (ultimoDigito % 2 == 0 && mes % 2 == 1) { // Digito par y Mes impar
        Alert.alert("Resultado", "Puedes circular los días : Martes, Jueves, Sabado, Domingo")
      } else if (ultimoDigito % 2 == 0 && mes % 2 == 0) { //Digito par y Mes par
        Alert.alert("Resultado", "Puedes circular los días : Lunes, Miercoles, Viernes, Domingo")
      } else if (ultimoDigito % 2 == 1 && mes % 2 == 0) {//Digito impar y Mes par
        Alert.alert("Resultado", "Puedes circular los días : Martes, Jueves, Sabado, Domingo")
      }
    } else if (entrada.length === 6) {
      const ultimoDigito = entrada.slice(4, 5);
      if (ultimoDigito % 2 == 1 && mes % 2 == 1) { // Digito impar y Mes impar
        Alert.alert("Resultado", "Puedes circular los días : Lunes, Miercoles, Viernes, Domingo")
      } else if (ultimoDigito % 2 == 0 && mes % 2 == 1) { // Digito par y Mes impar
        Alert.alert("Resultado", "Puedes circular los días : Martes, Jueves, Sabado, Domingo")
      } else if (ultimoDigito % 2 == 0 && mes % 2 == 0) { //Digito par y Mes par
        Alert.alert("Resultado", "Puedes circular los días : Lunes, Miercoles, Viernes, Domingo")
      } else if (ultimoDigito % 2 == 1 && mes % 2 == 0) {//Digito impar y Mes par
        Alert.alert("Resultado", "Puedes circular los días : Martes, Jueves, Sabado, Domingo")
      }
    } else {
      Alert.alert("Resultado", "Placa inválida")
    }

  };

  useEffect(() =>{
    if(dataScan != null){
      onPress();
    }
  }, [])

  return (
    <View style={styles.container2}>
      <Text style={styles.titulo}>Escanear código QR</Text>
      
      <View style={styles.lineStyle} ></View>

      <TextInput
        style={styles.input}
        placeholder="INGRESA LA PLACA A CONSULTAR"
        maxLength={7}
      />

      <TouchableOpacity
        style={styles.boton2}
        text
        title="ESCANEAR"
        onPress={onPress}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>CONSULTAR</Text>
      </TouchableOpacity>

    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container2: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '75%',
  },
  titulo: {

    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
   
  },
  input: {
    backgroundColor: "#E5E5E5",
    width: '90%',
    marginTop: 20,
    padding: '4%',
    margin: 'auto',
    borderRadius: 7,
    textTransform: 'uppercase',
    
  },
  boton: {
    backgroundColor: "rgb(95, 4, 180)",
    borderRadius: 50,
    padding: '4%',
    width: '75%',
    alignItems: 'center',
  },
  boton2: {
    backgroundColor: "#6F88D4",
    borderRadius: 50,
    marginTop: 30,
    padding: '4%',
    width: '90%',
    alignItems: 'center',
  },
  lineStyle: {
    width: '95%',
    borderWidth: 0.5,
    borderColor: '#ddd',
    marginTop: 70,
    marginBottom: 10,
  }

});
export default Home