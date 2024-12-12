import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';
import Constants from "expo-constants";
import { Button } from "react-native-paper";

export default function Page() {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const DEBOUNCE_TIMEOUT = 2000; // Tiempo de espera para el nuevo escaneo (2 segundos)

  useEffect(() => {
    (async () => {
      if (!permission) {
        await requestPermission();
      }
    })();
  }, [permission]);

  // Efecto para permitir un nuevo escaneo después de un tiempo
  useEffect(() => {
    if (scanned) {
      const timer = setTimeout(() => {
        setScanned(false); // Permitir nuevo escaneo después de 2 segundos
      }, DEBOUNCE_TIMEOUT);
      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    }
  }, [scanned]);

  if (!permission || !permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Es necesario otorgar permisos para acceder a la cámara</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.text}>Permitir acceso a la cámara</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      setScanned(true); // Marcar como escaneado para evitar múltiples escaneos rápidos
      setQrData(data);
      alert(`QR Code with type ${type} and data ${data} has been scanned!`);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button
          mode="contained"
          onPress={() => {
            setShowCamera(!showCamera);
            setQrData(null); // Reiniciar los datos escaneados cuando se oculta la cámara
          }}
        >
          {showCamera ? "Hide Camera" : "Show Camera"}
        </Button>
        {showCamera &&
          <>
            <CameraView
              style={styles.camera}
              type={facing}
              barcodeScannerSettings={{
                barcodeTypes: ["qr"],
              }}
              onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}  // Evitar nuevos escaneos si ya se ha escaneado
            >
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setScanned(false)}  // Permitir reescanear manualmente
                >
                  <Text style={styles.text}>Scan Again</Text>
                </TouchableOpacity>
              </View>
            </CameraView>
            {qrData && <Text style={styles.qrData}>Scanned QR Data: {qrData}</Text>}
          </>
        }
      </View>
    </GestureHandlerRootView>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#415A77',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 20,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    backgroundColor: 'transparent',
  },
  button: {
    padding: 10,
    backgroundColor: '#ebd14f',
    color: '#fff',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qrData: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
};
