import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Home from './src/home';
import useCamara from './src/hook/useCamara';
export default function App() {

  const {setShowScanner, setScanned, showScanner,callScanner,dataScan,scanned} = useCamara();
 
  return (
    <View style={styles.container}>
      {showScanner && callScanner()}
      {!showScanner && (
        <View>
          
          <TouchableOpacity
            style={styles.boton} 
            text 
            title="ESCANEAR"
            onPress={() => {
              setShowScanner(true);
              setScanned(false);
            }}
          >
          <MaterialCommunityIcons name="qrcode-scan" size={44} color="black" />
          </TouchableOpacity>
          <Home dataScan = {dataScan ? dataScan : null}/>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
   
  },
  boton: {
    backgroundColor: "rgba(0, 0, 0,0.03)",
    borderRadius: 50,
    padding: '4%',
    width: '75%',
    alignItems: 'center',
    top: 120,
    position: "absolute",
    top: 55,
    zIndex: 10,
  },
  boton2: {
    backgroundColor: "#6F88D4",
    borderRadius: 50,
    marginTop: 30,
    padding: '4%',
    width: '50%',
    alignItems: 'center',
  },
});

